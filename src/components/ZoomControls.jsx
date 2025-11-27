// Zoom controls component
const ZoomControls = ({ zoom, onZoomIn, onZoomOut, onReset, selectedCount }) => (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <p style={{ opacity: 0.7, fontSize: '14px' }}>
      Zoom: {Math.round(zoom * 100)}% | Selected: {selectedCount} seat(s)
    </p>
    <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button
        onClick={onZoomOut}
        style={{
          padding: '8px 16px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Zoom Out
      </button>
      <button
        onClick={onZoomIn}
        style={{
          padding: '8px 16px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Zoom In
      </button>
      <button
        onClick={onReset}
        style={{
          padding: '8px 16px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  </div>
);

export default ZoomControls;