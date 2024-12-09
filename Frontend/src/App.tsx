import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Dashboard from "./Dashboard"
import CFPTracker from "./CFPTracker"
import Profile from "./Profile/index"
import Charts from "./Charts/index"
import CFPOptimizer from "./CFPOptimizer/index"
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
  
    <div className="container mx-auto">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cfp-tracker" element={<CFPTracker />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/optimizer" element={<CFPOptimizer />} />
      </Routes>
    </div>
  );
}

export default App;