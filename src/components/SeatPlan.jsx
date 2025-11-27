// Main component
import React, { useState, useRef, useEffect } from 'react';
import SeatPlanViewport from './SeatPlanViewport';
import ZoomControls from './ZoomControls';
import Legend from './Legend';
import sampleData from '../sampleData';

const SeatPlan = () => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 400 });

  const seats = sampleData.data;
  const maxX = Math.max(...seats.map(s => s.position_left + s.width)) + 50;
  const maxY = Math.max(...seats.map(s => s.position_top + s.height)) + 50;
  const svgWidth = maxX;
  const svgHeight = maxY;

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = width / 2;
        setContainerSize({ width, height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 3);
    setZoom(newZoom);
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('.seat')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    const maxPanX = (containerSize.width * (zoom - 1)) / 2;
    const maxPanY = (containerSize.height * (zoom - 1)) / 2;
    
    setPan({
      x: Math.min(Math.max(newX, -maxPanX), maxPanX),
      y: Math.min(Math.max(newY, -maxPanY), maxPanY)
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleSeatClick = (seat) => {
    if (seat.seat_selectable === 0) return;
    
    const seatId = `${seat.row_name}-${seat.seat_name}`;
    const newSelected = new Set(selectedSeats);
    
    if (newSelected.has(seatId)) {
      newSelected.delete(seatId);
    } else {
      newSelected.add(seatId);
    }
    setSelectedSeats(newSelected);
  };

  const handleZoomIn = () => setZoom(Math.min(3, zoom + 0.2));
  const handleZoomOut = () => setZoom(Math.max(1, zoom - 0.2));
  const handleReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      background: '#000', 
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ marginBottom: '10px', fontSize: '24px' }}>Screen 6</h1>
      <p style={{ marginBottom: '20px', opacity: 0.7 }}>Select your seats</p>
      
      <SeatPlanViewport
        seats={seats}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
        zoom={zoom}
        pan={pan}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        isDragging={isDragging}
        containerRef={containerRef}
        containerSize={containerSize}
      />

      <ZoomControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        selectedCount={selectedSeats.size}
      />

      <Legend />
    </div>
  );
};

export default SeatPlan;