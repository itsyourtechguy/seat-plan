// Legend component
const Legend = () => (
  <div style={{ 
    marginTop: '20px', 
    display: 'flex', 
    gap: '20px', 
    fontSize: '13px', 
    justifyContent: 'center',
    background: 'rgba(26, 26, 26, 0.5)',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid rgba(74, 158, 255, 0.2)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ 
        width: '20px', 
        height: '20px', 
        background: '#1f1f1f', 
        border: '1.5px solid #3a7bc8', 
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}></div>
      <span style={{ fontWeight: '500' }}>Available</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ 
        width: '20px', 
        height: '20px', 
        background: '#3d8ce7', 
        border: '1.5px solid #5ea3ff', 
        borderRadius: '4px',
        boxShadow: '0 0 8px rgba(74, 158, 255, 0.5)'
      }}></div>
      <span style={{ fontWeight: '500' }}>Selected</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ 
        width: '20px', 
        height: '20px', 
        background: '#4a4a4a', 
        border: '1.5px solid #5a5a5a', 
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}></div>
      <span style={{ fontWeight: '500' }}>Occupied</span>
    </div>
  </div>
);

export default Legend;