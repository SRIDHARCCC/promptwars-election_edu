import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, ShieldCheck, CalendarCheck } from 'lucide-react';

function HomeDashboard() {
  return (
    <section aria-labelledby="home-heading">
      <h1 id="home-heading" style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #4F46E5, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Welcome to CivicPath
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px' }}>
        Your personalized, AI-driven journey to demystify the election process. 
        Get everything you need to be an informed and active voter.
      </p>

      <div className="grid-2">
        <article className="glass-panel" aria-labelledby="booth-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <MapPin size={24} color="#10B981" aria-hidden="true" />
            <h2 id="booth-heading">Where's my Booth?</h2>
          </div>
          <p>Find your nearest polling station and get real-time navigation.</p>
          <Link to="/booth" className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }} aria-label="Find your booth">
            Find Booth
          </Link>
        </article>

        <article className="glass-panel" aria-labelledby="assistant-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <MessageSquare size={24} color="#4F46E5" aria-hidden="true" />
            <h2 id="assistant-heading">Smart Assistant</h2>
          </div>
          <p>Have questions about election laws or candidate affidavits? Ask Gemini.</p>
          <Link to="/assistant" className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }} aria-label="Ask Gemini Assistant">
            Ask Gemini
          </Link>
        </article>

        <article className="glass-panel" aria-labelledby="verify-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <ShieldCheck size={24} color="#F59E0B" aria-hidden="true" />
            <h2 id="verify-heading">Identity Verification</h2>
          </div>
          <p>Securely verify your Voter ID status using Google Cloud Vision AI.</p>
          <Link to="/verify" className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }} aria-label="Verify your Voter ID">
            Verify ID
          </Link>
        </article>

        <article className="glass-panel" aria-labelledby="calendar-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <CalendarCheck size={24} color="#EC4899" aria-hidden="true" />
            <h2 id="calendar-heading">Key Date Sync</h2>
          </div>
          <p>Add important election dates to your Google Calendar.</p>
          <button className="btn-secondary" style={{ marginTop: '16px' }} aria-label="Sync key dates to Calendar">Sync Calendar</button>
        </article>
      </div>
    </section>
  );
}

export default HomeDashboard;
