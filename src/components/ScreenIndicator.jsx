// Screen indicator component
const ScreenIndicator = ({ totalSeats }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0 5px 0',
    pointerEvents: 'none'
  }}>
    <svg width="500" height="60" viewBox="0 0 500 60">
      <defs>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4a9eff', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#2d7fd4', stopOpacity: 0.4 }} />
        </linearGradient>
      </defs>
      <path
        d="M 80 42 Q 250 18 420 42"
        stroke="url(#screenGradient)"
        strokeWidth="4"
        fill="none"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(74, 158, 255, 0.4))' }}
      />
      <text 
        x="250" 
        y="50" 
        textAnchor="middle" 
        fill="#fff" s
        fontSize="13"
        fontWeight="500"
        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
      >
        {totalSeats} TOTAL SEATS
      </text>
    </svg>
  </div>
);

export default ScreenIndicator;