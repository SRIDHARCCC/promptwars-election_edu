import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, ShieldCheck, CalendarCheck } from 'lucide-react';

function HomeDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #4F46E5, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Welcome to CivicPath
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px' }}>
        Your personalized, AI-driven journey to demystify the election process. 
        Get everything you need to be an informed and active voter.
      </p>

      <div className="grid-2">
        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <MapPin size={24} color="#10B981" />
            <h2>Where's my Booth?</h2>
          </div>
          <p>Find your nearest polling station and get real-time navigation.</p>
          <Link to="/booth">
            <button className="btn-secondary" style={{ marginTop: '16px' }}>Find Booth</button>
          </Link>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <MessageSquare size={24} color="#4F46E5" />
            <h2>Smart Assistant</h2>
          </div>
          <p>Have questions about election laws or candidate affidavits? Ask Gemini.</p>
          <Link to="/assistant">
            <button className="btn-secondary" style={{ marginTop: '16px' }}>Ask Gemini</button>
          </Link>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <ShieldCheck size={24} color="#F59E0B" />
            <h2>Identity Verification</h2>
          </div>
          <p>Securely verify your Voter ID status using Google Cloud Vision AI.</p>
          <Link to="/verify">
            <button className="btn-secondary" style={{ marginTop: '16px' }}>Verify ID</button>
          </Link>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <CalendarCheck size={24} color="#EC4899" />
            <h2>Key Date Sync</h2>
          </div>
          <p>Add important election dates to your Google Calendar.</p>
          <button className="btn-secondary" style={{ marginTop: '16px' }}>Sync Calendar</button>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
