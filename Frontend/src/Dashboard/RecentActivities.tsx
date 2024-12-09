import { Car, Lightbulb, Apple } from 'lucide-react';

const activities = [
  {
    icon: <Car className="w-6 h-6 text-blue-500" />,
    activity: 'Car Travel',
    emissions: '2.5 kg CO2',
    date: 'Today'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    activity: 'Electricity Usage',
    emissions: '1.8 kg CO2',
    date: 'Yesterday'
  },
  {
    icon: <Apple className="w-6 h-6 text-red-500" />,
    activity: 'Food Consumption',
    emissions: '3.2 kg CO2',
    date: '2 days ago'
  }
];

export default function RecentActivities() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              {activity.icon}
              <div className="ml-4">
                <p className="font-medium">{activity.activity}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            </div>
            <span className="text-gray-600">{activity.emissions}</span>
          </div>
        ))}
      </div>
    </div>
  );
}