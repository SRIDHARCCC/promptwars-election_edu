import { useState } from 'react';
import { ShieldCheck, Upload, CheckCircle } from 'lucide-react';

function Verification() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, processing, success, error

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('idle');
    }
  };

  const handleVerify = () => {
    if (!file) return;
    
    setIsUploading(true);
    setStatus('processing');
    
    // Simulate Cloud Vision API call and Verification
    setTimeout(() => {
      setIsUploading(false);
      setStatus('success');
    }, 2500);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <ShieldCheck size={32} color="#F59E0B" />
        <h1>Identity Verification</h1>
      </div>
      <p style={{ marginBottom: '24px' }}>
        Upload a clear picture of your Voter ID. We will use Google Cloud Vision AI to securely extract and verify your details.
      </p>

      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        
        {status === 'success' ? (
          <div style={{ padding: '40px 20px' }}>
            <CheckCircle size={64} color="#10B981" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ color: '#10B981' }}>Verification Successful!</h2>
            <p>Your ID has been verified and your status is active.</p>
            <button className="btn-secondary" onClick={() => {setFile(null); setStatus('idle');}} style={{ marginTop: '24px' }}>
              Verify Another ID
            </button>
          </div>
        ) : (
          <>
            <div 
              style={{ 
                border: '2px dashed var(--surface-border)', 
                borderRadius: '12px', 
                padding: '40px 20px',
                marginBottom: '24px',
                background: 'rgba(0,0,0,0.2)',
                cursor: 'pointer'
              }}
              onClick={() => document.getElementById('id-upload').click()}
            >
              <Upload size={48} color="var(--text-secondary)" style={{ margin: '0 auto 16px' }} />
              <h3>{file ? file.name : "Click or drag to upload your Voter ID"}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Supports JPG, PNG (Max 5MB)</p>
              <input 
                id="id-upload" 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
              />
            </div>

            <button 
              className="btn-primary" 
              onClick={handleVerify} 
              disabled={!file || isUploading}
              style={{ width: '100%', opacity: (!file || isUploading) ? 0.5 : 1 }}
            >
              {isUploading ? 'Processing via Cloud Vision...' : 'Verify Identity'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Verification;
