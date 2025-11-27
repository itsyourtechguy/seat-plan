// Zoom controls component
const ZoomControls = ({ zoom, onZoomIn, onZoomOut, onReset, selectedCount }) => (
  <div style={{ marginTop: '30px', textAlign: 'center' }}>
    <p style={{ opacity: 0.7, fontSize: '13px', marginBottom: '8px' }}>
      Zoom: {Math.round(zoom * 100)}% | Selected: {selectedCount} seat(s)
    </p>
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
      <button
        onClick={onZoomOut}
        style={{
          padding: '6px 12px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Zoom Out
      </button>
      <button
        onClick={onZoomIn}
        style={{
          padding: '6px 12px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Zoom In
      </button>
      <button
        onClick={onReset}
        style={{
          padding: '6px 12px',
          background: '#1a1a1a',
          color: '#4a9eff',
          border: '1px solid #4a9eff',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Reset
      </button>
    </div>
  </div>
);

export default ZoomControls;