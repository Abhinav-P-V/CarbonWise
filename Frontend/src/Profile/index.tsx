import { useRecoilValue } from "recoil";
import Sidebar from "../components/Sidebar";
import { User, Settings, Bell } from 'lucide-react';
import { UserAtom } from "../Atoms/userAtom";

export default function Profile() {

    const user = useRecoilValue(UserAtom);

    return (
      <div className="min-h-screen bg-gray-50 pl-64">
        <Sidebar />
        <main className="p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-green-100 p-4 rounded-full">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                      <h2 className="text-2xl font-bold">{user?.username}</h2>
                      <p className="text-gray-600">{user?.email}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <Settings className="w-5 h-5 text-gray-500" />
                      <span className="ml-3">Account Settings</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700">Edit</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <Bell className="w-5 h-5 text-gray-500" />
                      <span className="ml-3">Notifications</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700">Configure</button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-8 py-6">
                <h3 className="text-lg font-semibold mb-4">Carbon Footprint Goals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Monthly Target</span>
                      <span className="text-sm text-gray-500">150 kg CO2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}