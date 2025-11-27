// Zoom controls component
const ZoomControls = ({ zoom, onZoomIn, onZoomOut, onReset, selectedCount }) => (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <p style={{ 
      opacity: 0.8, 
      fontSize: '14px', 
      marginBottom: '12px',
      fontWeight: '500',
      letterSpacing: '0.5px'
    }}>
      Zoom: {Math.round(zoom * 100)}% | Selected: {selectedCount} seat(s)
    </p>
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button
        onClick={onZoomOut}
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
          color: '#4a9eff',
          border: '1.5px solid #4a9eff',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #2a5f8f 0%, #3a7bc8 100%)';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 12px rgba(74, 158, 255, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }}
      >
        Zoom Out
      </button>
      <button
        onClick={onZoomIn}
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
          color: '#4a9eff',
          border: '1.5px solid #4a9eff',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #2a5f8f 0%, #3a7bc8 100%)';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 12px rgba(74, 158, 255, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }}
      >
        Zoom In
      </button>
      <button
        onClick={onReset}
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
          color: '#4a9eff',
          border: '1.5px solid #4a9eff',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #2a5f8f 0%, #3a7bc8 100%)';
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 12px rgba(74, 158, 255, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }}
      >
        Reset
      </button>
    </div>
  </div>
);

export default ZoomControls;