// Mini map component
const MiniMap = ({ seats, svgWidth, svgHeight, zoom, pan, selectedSeats }) => {
  if (zoom <= 1) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      width: '150px',
      height: '75px',
      background: 'rgba(10, 10, 10, 0.9)',
      border: '2px solid #4a9eff',
      borderRadius: '10px',
      overflow: 'hidden',
      pointerEvents: 'none',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
    }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet">
        {seats.map((seat, idx) => {
          const seatId = `${seat.row_name}-${seat.seat_name}`;
          const isSelected = selectedSeats.has(seatId);
          return (
            <rect
              key={idx}
              x={seat.position_left}
              y={seat.position_top}
              width={seat.width}
              height={seat.height}
              fill={isSelected ? "#4a9eff" : "#3a7bc8"}
              opacity={isSelected ? "0.9" : "0.3"}
            />
          );
        })}
        <rect
          x={(svgWidth / 2) - (svgWidth / (2 * zoom)) - (pan.x / zoom)}
          y={(svgHeight / 2) - (svgHeight / (2 * zoom)) - (pan.y / zoom)}
          width={svgWidth / zoom}
          height={svgHeight / zoom}
          fill="none"
          stroke="#4a9eff"
          strokeWidth="2.5"
          rx="3"
        />
        <circle
          cx={(svgWidth / 2) - (pan.x / zoom)}
          cy={(svgHeight / 2) - (pan.y / zoom)}
          r="6"
          fill="#4a9eff"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default MiniMap;