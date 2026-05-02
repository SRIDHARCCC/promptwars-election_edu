import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, MessageSquare, ShieldCheck, Calendar, Home } from 'lucide-react';
import HomeDashboard from './pages/HomeDashboard';
import BoothMap from './pages/BoothMap';
import Assistant from './pages/Assistant';
import Verification from './pages/Verification';

function App() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/booth', label: 'Booth Map', icon: MapPin },
    { path: '/assistant', label: 'Assistant', icon: MessageSquare },
    { path: '/verify', label: 'Verification', icon: ShieldCheck },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-logo">CivicPath</div>
        <nav className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/booth" element={<BoothMap />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
