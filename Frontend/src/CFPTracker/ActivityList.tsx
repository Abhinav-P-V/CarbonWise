import { Car, Lightbulb, Apple, Home } from 'lucide-react';

interface Activity {
    id: string;
    type: string;
    value: number;
    date: string;
}
  
interface ActivityListProps {
  activities: Activity[];
}

const getIcon = (type: string) => {
  switch (type) {
    case 'transport':
      return <Car className="w-5 h-5 text-blue-500" />;
    case 'energy':
      return <Lightbulb className="w-5 h-5 text-yellow-500" />;
    case 'food':
      return <Apple className="w-5 h-5 text-red-500" />;
    case 'household':
      return <Home className="w-5 h-5 text-purple-500" />;
    default:
      return null;
  }
};

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No activities logged yet</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center">
                {getIcon(activity.type)}
                <div className="ml-4">
                  <p className="font-medium capitalize">{activity.type}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
              <span className="text-gray-600">{activity.value} kg CO2</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}