// Main viewport component
import Seat from "./Seat";
import MiniMap from "./MiniMap";
import ScreenIndicator from "./ScreenIndicator";

const SeatPlanViewport = ({ seats, svgWidth, svgHeight, zoom, pan, selectedSeats, onSeatClick, onWheel, onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd, isDragging, containerRef, containerSize }) => (
  <div style={{ width: '100%', maxWidth: '900px' }}>
    <ScreenIndicator totalSeats={seats.filter(s => s.seat_selectable === 1).length} />
    
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: `${containerSize.width / 2}px`,
        position: 'relative',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(74, 158, 255, 0.2)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(74, 158, 255, 0.1)'
      }}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          pointerEvents: 'auto',
          padding: '20px 0'
        }}
      >
        {seats.map((seat, idx) => {
          const seatId = `${seat.row_name}-${seat.seat_name}`;
          return (
            <Seat
              key={idx}
              seat={seat}
              isSelected={selectedSeats.has(seatId)}
              onSelect={() => onSeatClick(seat)}
            />
          );
        })}
      </svg>
      <MiniMap seats={seats} svgWidth={svgWidth} svgHeight={svgHeight} zoom={zoom} pan={pan} selectedSeats={selectedSeats} />
    </div>
  </div>
);

export default SeatPlanViewport;