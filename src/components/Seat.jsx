// Individual seat component
import { useState } from "react";

const Seat = ({ seat, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getSeatColor = () => {
    if (isSelected) return '#3d8ce7';
    if (isHovered && seat.seat_selectable === 1 && (seat.seat_status === 0 || !seat.seat_status)) return '#2a5f8f';
    if (seat.seat_status === 1 || seat.seat_status === 4) return '#4a4a4a';
    if (seat.seat_selectable === 0) return '#2a2a2a';
    return '#1f1f1f';
  };

  const getSeatStroke = () => {
    if (isSelected) return '#5ea3ff';
    if (isHovered && seat.seat_selectable === 1 && (seat.seat_status === 0 || !seat.seat_status)) return '#4a9eff';
    if (seat.seat_status === 1 || seat.seat_status === 4) return '#5a5a5a';
    return '#3a7bc8';
  };

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <rect
        className="seat"
        x={seat.position_left}
        y={seat.position_top}
        width={seat.width}
        height={seat.height}
        rx="5"
        fill={getSeatColor()}
        stroke={getSeatStroke()}
        strokeWidth={isSelected ? "2" : "1.5"}
        style={{ 
          cursor: seat.seat_selectable ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s ease',
          filter: isSelected ? 'drop-shadow(0 0 8px rgba(74, 158, 255, 0.6))' : 'none'
        }}
        onClick={onSelect}
      />
      {seat.seat_selectable === 1 && (seat.seat_status === 0 || !seat.seat_status) && seat.seat_name && (
        <text
          x={seat.position_left + seat.width / 2}
          y={seat.position_top + seat.height / 2 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={isSelected ? "#fff" : "#8ab4e6"}
          fontSize="9"
          fontWeight={isSelected ? "600" : "400"}
          pointerEvents="none"
          style={{ transition: 'all 0.2s ease' }}
        >
          {seat.seat_name}
        </text>
      )}
    </g>
  );
};

export default Seat;
