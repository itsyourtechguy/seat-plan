🪑 Interactive Seat Plan Component

A fully responsive React component for visualizing and interacting with venue seating layouts—optimized for desktop and mobile with rich navigation, intuitive gestures, and real-time feedback.

✨ Features
🎯 Core Functionality

    Interactive Seat Selection: Click or tap to select/deselect seats.
    Real-time Status Display: Clear visual distinction between:
        ✅ Available seats  
        🚫 Occupied seats  
        🔵 Selected seats
    Fully Responsive: Maintains a 2:1 aspect ratio and scales smoothly across all screen sizes.

🔍 Zoom & Navigation

    Desktop: Mouse wheel zoom (100% – 300%)
    Mobile: Pinch-to-zoom and drag-to-pan gestures
    Smooth Panning: Navigate freely when zoomed in
    Mini-map Overlay: Appears automatically when zoomed beyond 100%, showing viewport position and selected seats

📱 Mobile Optimized

    Natural touch gesture support
    Prevents browser overscroll for seamless UX
    Fallback button controls for accessibility

🧩 Component Structure

SeatPlan (Main Component)
├── SeatPlanViewport (Canvas & Interaction Layer)
│   ├── ScreenIndicator (Stage/screen marker)
│   ├── Seat (Individual seat renderer)
│   └── MiniMap (Live navigation overlay)
├── ZoomControls (Buttons + zoom level indicator)
└── Legend (Visual key for seat statuses)


🚀 Installation & Development

    Clone the repository

    bash
    1 git clone https://github.com/itsyourtechguy/seat-plan.git
    2 cd seat-plan

Install dependencies

bash
1 npm install

Start the dev server

bash
1 npm run dev

Visit http://localhost:5173 (or your Vite default port) to view the demo.