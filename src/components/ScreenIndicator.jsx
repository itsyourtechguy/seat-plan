// Screen indicator component
const ScreenIndicator = ({ totalSeats }) => (
  <div style={{
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    pointerEvents: 'none'
  }}>
    <svg width="400" height="40" viewBox="0 0 400 40">
      <path
        d="M 50 30 Q 200 10 350 30"
        stroke="#4a9eff"
        strokeWidth="3"
        fill="none"
      />
      <text x="200" y="35" textAnchor="middle" fill="#fff" fontSize="12">
        {totalSeats} TOTAL SEATS
      </text>
    </svg>
  </div>
);

export default ScreenIndicator;