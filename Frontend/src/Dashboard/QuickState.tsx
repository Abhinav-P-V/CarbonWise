import { TrendingDown, TrendingUp, Activity, Target } from 'lucide-react';

const stats = [
  {
    label: 'Total Emissions',
    value: '2.4 tons',
    change: '-12%',
    icon: <Activity className="w-6 h-6 text-blue-500" />,
    trend: 'down'
  },
  {
    label: 'Monthly Average',
    value: '0.2 tons',
    change: '+5%',
    icon: <Target className="w-6 h-6 text-green-500" />,
    trend: 'up'
  }
];

export default function QuickStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              {stat.icon}
              {stat.trend === 'down' ? (
                <TrendingDown className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingUp className="w-5 h-5 text-red-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className={`text-sm ${stat.trend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}