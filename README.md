# Security Platform UI

A modern, responsive React application for a B2B SaaS security platform built with Vite, React, and Tailwind CSS.

## Features Implemented

### ✅ Login/Sign-up Screen
- Split-layout design with gradient background
- Responsive form with validation-ready inputs
- Social login buttons (Apple, Google, Meta)
- Theme toggle functionality
- Mobile-responsive design

### ✅ Dashboard Screen
- Sidebar navigation with collapsible functionality
- Statistics overview cards with severity-based coloring
- Interactive scan table with search functionality
- Responsive design (desktop table view, mobile card view)
- Toast notifications for user feedback
- Theme switching (light/dark mode)

### ✅ Navigation & Routing
- React Router implementation
- Protected route structure
- Navigation between Login → Dashboard → Scan Detail
- Active navigation highlighting

### ✅ Component Library
- Reusable UI components (Button, Badge, StatusChip, ProgressBar)
- Theme system with context provider
- Responsive layout components
- Toast notification system

### ✅ Mock Data Integration
- Realistic scan data with varied statuses
- Vulnerability statistics
- Formatted timestamps and progress indicators

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Vitest** - Testing framework (configured)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   └── layout/          # Layout components (Sidebar, Header)
├── pages/               # Page components
├── context/             # React contexts (Theme)
├── hooks/               # Custom hooks
├── data/                # Mock data
├── utils/               # Utility functions
└── config/              # Configuration files
```

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 375px (mobile), 768px (tablet), 1280px+ (desktop)
- Collapsible sidebar on mobile
- Responsive table → card layout transformation

### Theme System
- Light and dark mode support
- Persistent theme selection
- Smooth transitions between themes
- Consistent color palette

### Interactive Elements
- Hover states on all interactive elements
- Toast notifications for user feedback
- Search functionality with real-time filtering
- Clickable table rows for navigation

## Next Steps

The following features are planned for future implementation:
- [ ] Active Scan Detail screen with live console
- [ ] Finding log with vulnerability cards
- [ ] Advanced filtering and column customization
- [ ] Real-time updates and WebSocket integration
- [ ] User authentication and session management
- [ ] API integration

## Development

The application is built with modern React patterns:
- Functional components with hooks
- Context for global state management
- Custom hooks for reusable logic
- Responsive design with Tailwind CSS
- Component composition and reusability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)