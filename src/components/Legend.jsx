// Legend component
const Legend = () => (
  <div style={{ marginTop: '30px', display: 'flex', gap: '20px', fontSize: '14px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '20px', height: '20px', background: '#1a1a1a', border: '1.5px solid #4a9eff', borderRadius: '3px' }}></div>
      <span>Available</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '20px', height: '20px', background: '#4a9eff', border: '1.5px solid #6bb3ff', borderRadius: '3px' }}></div>
      <span>Selected</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '20px', height: '20px', background: '#555', border: '1.5px solid #666', borderRadius: '3px' }}></div>
      <span>Occupied</span>
    </div>
  </div>
);

export default Legend;