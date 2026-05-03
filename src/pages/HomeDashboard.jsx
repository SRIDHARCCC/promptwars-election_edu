import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, ShieldCheck, CalendarCheck } from 'lucide-react';

const DashboardPanel = React.memo(({ title, icon: Icon, iconColor, id, description, linkTo, btnText, btnLabel }) => {
  return (
    <article className="glass-panel" aria-labelledby={`${id}-heading`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <Icon size={24} color={iconColor} aria-hidden="true" />
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      <p>{description}</p>
      {linkTo ? (
        <Link to={linkTo} className="btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }} aria-label={btnLabel || btnText}>
          {btnText}
        </Link>
      ) : (
        <button className="btn-secondary" style={{ marginTop: '16px' }} aria-label={btnLabel || btnText}>
          {btnText}
        </button>
      )}
    </article>
  );
});

DashboardPanel.displayName = 'DashboardPanel';

function HomeDashboard() {
  const panels = [
    {
      id: 'booth',
      title: "Where's my Booth?",
      icon: MapPin,
      iconColor: "#10B981",
      description: "Find your nearest polling station and get real-time navigation.",
      linkTo: "/booth",
      btnText: "Find Booth",
      btnLabel: "Find your booth"
    },
    {
      id: 'assistant',
      title: "Smart Assistant",
      icon: MessageSquare,
      iconColor: "#4F46E5",
      description: "Have questions about election laws or candidate affidavits? Ask Gemini.",
      linkTo: "/assistant",
      btnText: "Ask Gemini",
      btnLabel: "Ask Gemini Assistant"
    },
    {
      id: 'verify',
      title: "Identity Verification",
      icon: ShieldCheck,
      iconColor: "#F59E0B",
      description: "Securely verify your Voter ID status using Google Cloud Vision AI.",
      linkTo: "/verify",
      btnText: "Verify ID",
      btnLabel: "Verify your Voter ID"
    },
    {
      id: 'calendar',
      title: "Key Date Sync",
      icon: CalendarCheck,
      iconColor: "#EC4899",
      description: "Add important election dates to your Google Calendar.",
      btnText: "Sync Calendar",
      btnLabel: "Sync key dates to Calendar"
    }
  ];

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
        {panels.map((panel) => (
          <DashboardPanel key={panel.id} {...panel} />
        ))}
      </div>
    </section>
  );
}

export default HomeDashboard;
