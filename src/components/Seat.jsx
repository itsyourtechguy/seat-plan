// Individual seat component
const Seat = ({ seat, isSelected, onSelect }) => {
  const getSeatColor = () => {
    if (isSelected) return '#4a9eff';
    if (seat.seat_status === 1) return '#555';
    if (seat.seat_selectable === 0) return '#333';
    return '#1a1a1a';
  };

  const getSeatStroke = () => {
    if (isSelected) return '#6bb3ff';
    if (seat.seat_status === 1) return '#666';
    return '#4a9eff';
  };

  return (
    <g>
      <rect
        className="seat"
        x={seat.position_left}
        y={seat.position_top}
        width={seat.width}
        height={seat.height}
        rx="4"
        fill={getSeatColor()}
        stroke={getSeatStroke()}
        strokeWidth="1.5"
        style={{ 
          cursor: seat.seat_selectable ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s'
        }}
        onClick={onSelect}
      />
      {seat.seat_selectable === 1 && seat.seat_status === 0 && (
        <text
          x={seat.position_left + seat.width / 2}
          y={seat.position_top + seat.height / 2 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="10"
          pointerEvents="none"
          opacity="0.7"
        >
          {seat.seat_name}
        </text>
      )}
    </g>
  );
};

export default Seat;
