Interactive Seat Plan Component
A responsive React component for displaying and interacting with venue seat plans, optimized for both desktop and mobile devices.
Features
🎯 Core Functionality

Interactive Seat Selection - Click/tap seats to select or deselect them
Real-time Status Display - Shows available, occupied, and selected seats with distinct visual states
Responsive Design - Maintains 2:1 aspect ratio and scales to fit any screen size

🔍 Zoom & Navigation

Desktop Controls - Mouse wheel zoom (100%-300%)
Touch Gestures - Pinch-to-zoom with two fingers on mobile devices
Smooth Panning - Drag to navigate when zoomed in
Mini-map - Appears when zoomed beyond 100%, showing your position and selected seats in the venue

📱 Mobile Optimized

Touch-friendly interface with natural gesture support
Prevents overscroll and maintains smooth performance
Responsive button controls as fallback

Component Structure
SeatPlan (Main Component)
├── SeatPlanViewport (Canvas & Interaction)
│   ├── ScreenIndicator (Venue screen display)
│   ├── Seat (Individual seat rendering)
│   └── MiniMap (Navigation overlay)
├── ZoomControls (Zoom buttons & info)
└── Legend (Seat status key)

Installation
git clone https://github.com/itsyourtechguy/seat-plan.git
cd seat-plan
npm install
npm run dev (to view locally)