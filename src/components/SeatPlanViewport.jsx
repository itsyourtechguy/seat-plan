// Main viewport component
import Seat from "./Seat";
import MiniMap from "./MiniMap";
import ScreenIndicator from "./ScreenIndicator";

const SeatPlanViewport = ({ seats, svgWidth, svgHeight, zoom, pan, selectedSeats, onSeatClick, onWheel, onMouseDown, onMouseMove, onMouseUp, isDragging, containerRef, containerSize }) => (
  <div 
    ref={containerRef}
    style={{
      width: '100%',
      maxWidth: '800px',
      height: `${containerSize.width / 2}px`,
      position: 'relative',
      overflow: 'hidden',
      cursor: isDragging ? 'grabbing' : 'grab',
      touchAction: 'none',
      background: '#0a0a0a',
      borderRadius: '8px'
    }}
    onWheel={onWheel}
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseUp}
  >
    <ScreenIndicator totalSeats={seats.length} />
    
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
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
);

export default SeatPlanViewport;