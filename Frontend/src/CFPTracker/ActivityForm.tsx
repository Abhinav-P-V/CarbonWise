import React, { useState } from 'react';
import { Car, Lightbulb, Apple, Home } from 'lucide-react';

interface Activity {
    id: string;
    type: string;
    value: number;
    date: string;
}


interface ActivityFormProps {
  onSubmit: (activity: Activity) => void;
}

export default function ActivityForm({ onSubmit }: ActivityFormProps) {
  const [type, setType] = useState('transport');
  const [value, setValue] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type,
      value: parseFloat(value),
      date,
      id: Date.now().toString(),
    });
    setValue('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Log New Activity</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Activity Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setType('transport')}
              className={`p-4 border rounded-lg flex items-center ${
                type === 'transport' ? 'border-green-500 bg-green-50' : ''
              }`}
            >
              <Car className="w-5 h-5 mr-2" />
              Transport
            </button>
            <button
              type="button"
              onClick={() => setType('energy')}
              className={`p-4 border rounded-lg flex items-center ${
                type === 'energy' ? 'border-green-500 bg-green-50' : ''
              }`}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Energy
            </button>
            <button
              type="button"
              onClick={() => setType('food')}
              className={`p-4 border rounded-lg flex items-center ${
                type === 'food' ? 'border-green-500 bg-green-50' : ''
              }`}
            >
              <Apple className="w-5 h-5 mr-2" />
              Food
            </button>
            <button
              type="button"
              onClick={() => setType('household')}
              className={`p-4 border rounded-lg flex items-center ${
                type === 'household' ? 'border-green-500 bg-green-50' : ''
              }`}
            >
              <Home className="w-5 h-5 mr-2" />
              Household
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-2">
            Value (kg CO2)
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Log Activity
        </button>
      </form>
    </div>
  );
}