import Sidebar from "../components/Sidebar"
import { Car, Lightbulb, Apple, Home, ArrowRight } from 'lucide-react';

const recommendations = [
  {
    category: 'Transport',
    icon: <Car className="w-6 h-6 text-blue-500" />,
    title: 'Switch to Public Transport',
    impact: '- 2.5 kg CO2/day',
    description: 'Using public transport instead of a private car can significantly reduce your carbon footprint.',
    difficulty: 'Medium',
  },
  {
    category: 'Energy',
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: 'LED Light Bulbs',
    impact: '- 0.15 kg CO2/day',
    description: 'Replace all traditional bulbs with LED alternatives for better energy efficiency.',
    difficulty: 'Easy',
  },
  {
    category: 'Food',
    icon: <Apple className="w-6 h-6 text-red-500" />,
    title: 'Reduce Meat Consumption',
    impact: '- 1.8 kg CO2/day',
    description: 'Having one meat-free day per week can significantly reduce your carbon footprint.',
    difficulty: 'Medium',
  },
  {
    category: 'Household',
    icon: <Home className="w-6 h-6 text-purple-500" />,
    title: 'Smart Thermostat',
    impact: '- 1.2 kg CO2/day',
    description: 'Install a smart thermostat to optimize your heating and cooling usage.',
    difficulty: 'Hard',
  },
];

export default function CFPOptimizer() {
  return (
    <div className="min-h-screen bg-gray-50 pl-64">
      <Sidebar />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Carbon Footprint Optimizer</h1>
          
          <div className="grid gap-8">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">{rec.icon}</div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{rec.category}</span>
                      <span className="text-sm font-medium text-gray-500">
                        Difficulty: {rec.difficulty}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{rec.title}</h3>
                    <p className="mt-2 text-gray-600">{rec.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-green-600">{rec.impact}</span>
                      <button className="flex items-center text-green-600 hover:text-green-700">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}