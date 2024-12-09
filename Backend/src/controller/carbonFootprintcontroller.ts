import { Request, Response } from "express";
import CarbonFootprint from "../models/carbonFootprintmodel";
import { ICarbonFootprint } from "../models/carbonFootprintmodel";

// Calculate emissions for all factors
const calculateEmissions = (data: any): number => {
  let totalEmissions = 0;

  // Transport
  if (data.transport) {
    const fuelConsumed = data.transport.distance / data.transport.fuelEfficiency;
    data.transport.emissions = fuelConsumed * 2.31; // Example emission factor
    totalEmissions += data.transport.emissions;
  }

  // Energy
  if (data.energy) {
    const gridEmissions =
      data.energy.electricityConsumption *
      0.5 *
      (1 - data.energy.renewablePercentage / 100); // Example emission factor
    const cookingEmissions =
      data.energy.cookingFuelConsumption * 1.51; // Example emission factor
    data.energy.emissions = gridEmissions + cookingEmissions;
    totalEmissions += data.energy.emissions;
  }

  // Food
  if (data.food) {
    const dietEmissions = data.food.weeklyMeatConsumption * 27; // Example factor for meat
    const wasteEmissions = data.food.foodWaste * 2.5;
    data.food.emissions = dietEmissions + wasteEmissions;
    totalEmissions += data.food.emissions;
  }

  // Waste
  if (data.waste) {
    const wasteEmissions =
      data.waste.weeklyWasteGenerated *
      (1 - data.waste.recyclingPercentage / 100) *
      1.2; // Example emission factor
    data.waste.emissions = wasteEmissions;
    totalEmissions += data.waste.emissions;
  }

  // Water
  if (data.water) {
    const waterEmissions =
      data.water.dailyUsage *
      ((data.water.heatedPercentage / 100) * 0.3 + 0.05) *
      7; // Weekly emissions
    data.water.emissions = waterEmissions;
    totalEmissions += data.water.emissions;
  }

  return totalEmissions;
};

// Save Carbon Footprint
export const saveCarbonFootprint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, transport, energy, food, waste, water } = req.body; // Expect all data including userId in the body

    // Ensure userId is provided
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    // Calculate total emissions
    const totalEmissions = calculateEmissions({ transport, energy, food, waste, water });

    const carbonFootprint: ICarbonFootprint = new CarbonFootprint({
      userId,  // User ID from body
      transport, energy, food, waste, water, totalEmissions,
    });

    await carbonFootprint.save();
    res.status(201).json({ message: "Carbon Footprint saved successfully.", carbonFootprint });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error saving data.", details: error.message });
  }
};

// Retrieve Carbon Footprint by Factor
const isValidFactor = (factor: string): factor is keyof ICarbonFootprint => {
    return ['transport', 'energy', 'food', 'waste', 'water'].includes(factor);
  };
  
  // Retrieve Carbon Footprint by Factor
  export const getCFPByFactor = async (req: Request, res: Response): Promise<void> => {
    try {
      const { factor, startDate, endDate } = req.body; // Assuming these come from the body
  
      // Check if required fields are provided
      if (!factor || !startDate || !endDate) {
        res.status(400).json({ message: "Missing required fields: factor, startDate, endDate" });
        return;
      }
  
      // Check if the factor is valid
      if (!isValidFactor(factor)) {
        res.status(400).json({ message: `Invalid factor: ${factor}` });
        return;
      }
  
      // Query the database for carbon footprint data by factor
      const data = await CarbonFootprint.find({
        userId: req.user.id, // Assuming userId is available
        date: { $gte: new Date(startDate), $lte: new Date(endDate) },
      }).select({ [factor]: 1, date: 1 }).sort({ date: 1 });
  
      if (!data.length) {
        res.status(404).json({ message: `No data found for factor: ${factor}` });
        return;
      }
  
      // Safely access the dynamic 'factor' property on each document entry
      const formattedData = data.map((entry) => {
        const emissionsData = entry[factor]; // entry[factor] should now be typed correctly
  
        // Ensure that emissionsData exists and has the 'emissions' property
        const emissions = (emissionsData && 'emissions' in emissionsData) ? emissionsData.emissions : 0;
  
        return {
          date: entry.date,
          emissions,
        };
      });
  
      res.status(200).json({ message: `Data for ${factor} retrieved successfully.`, data: formattedData });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving data.", details: error.message });
    }
};