import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

function BoothMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194 }), []); // Default to SF for demo

  if (!isLoaded) return <div className="glass-panel">Loading Google Maps...</div>;

  return (
    <section aria-labelledby="boothmap-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <MapPin size={32} color="#10B981" aria-hidden="true" />
        <h1 id="boothmap-heading">Where's my Booth?</h1>
      </div>
      <p style={{ marginBottom: '24px' }}>
        Find the nearest polling station based on your registered address. 
        <br/><small style={{ color: '#F59E0B' }}>Note: Requires VITE_GOOGLE_MAPS_API_KEY in .env to function properly.</small>
      </p>

      <div className="map-container">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            ]
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
}

export default BoothMap;
