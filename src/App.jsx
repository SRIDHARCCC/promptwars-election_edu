import React, { Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, MessageSquare, ShieldCheck, Home } from 'lucide-react';

const HomeDashboard = React.lazy(() => import('./pages/HomeDashboard'));
const BoothMap = React.lazy(() => import('./pages/BoothMap'));
const Assistant = React.lazy(() => import('./pages/Assistant'));
const Verification = React.lazy(() => import('./pages/Verification'));

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
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to ${item.label}`}
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="main-content">
        <Suspense fallback={<div style={{ padding: '24px', textAlign: 'center' }}>Loading application modules...</div>}>
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/booth" element={<BoothMap />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/verify" element={<Verification />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
