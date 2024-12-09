import Sidebar from "../components/Sidebar"
import EmissionOverview from './EmissionOverview';
import EmissionTrends from './EmissionTrends';
import QuickStats from "./QuickState"
import RecentActivities from './RecentActivities';
import Tips from './Tips';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pl-64">
      <Sidebar />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <EmissionOverview />
            <QuickStats />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <EmissionTrends />
            </div>
            <div>
              <Tips />
            </div>
          </div>

          <RecentActivities />
        </div>
      </main>
    </div>
  );
}