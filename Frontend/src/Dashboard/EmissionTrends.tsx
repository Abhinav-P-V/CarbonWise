import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', transport: 400, energy: 240, food: 200 },
  { name: 'Feb', transport: 300, energy: 139, food: 220 },
  { name: 'Mar', transport: 200, energy: 980, food: 190 },
  { name: 'Apr', transport: 278, energy: 390, food: 200 },
  { name: 'May', transport: 189, energy: 480, food: 210 },
];

export default function EmissionTrends() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Emission Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="transport" stroke="#0088FE" />
            <Line type="monotone" dataKey="energy" stroke="#00C49F" />
            <Line type="monotone" dataKey="food" stroke="#FFBB28" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}