Security Platform UI

This project is a responsive React application that recreates the UI of a B2B SaaS security platform. The goal was to closely match the provided design reference while keeping the code clean, reusable, and easy to maintain.

The app is built using React, Vite, and Tailwind CSS, with a focus on visual accuracy, responsiveness, and proper component structure.

What’s Included
Login / Sign-up Screen

Split layout with a gradient left section and a form card on the right

Fields for first name, last name, email, and password

Social login buttons (Apple, Google, Meta)

Light and dark theme toggle

Fully responsive layout

Dashboard

Sidebar navigation with active link highlighting

Severity overview cards (Critical, High, Medium, Low)

Scan table with search functionality

Status chips and colored vulnerability badges

Responsive layout (table view on desktop, card layout on mobile)

Toast feedback for interactive buttons

Navigation

Implemented using React Router

Login → Dashboard → Scan Detail navigation flow

Protected routing structure

Reusable Components

Button

Badge (severity-based)

StatusChip

ProgressBar

Theme toggle with context

Toast notification system

Mock Data

All data is locally mocked using structured JSON files.
Scan entries include varied statuses, timestamps, and vulnerability counts to simulate realistic usage.

Tech Stack

React

Vite

Tailwind CSS

React Router

Lucide React

Vitest (configured)

How to Run

Install dependencies:

npm install

Start development server:

npm run dev

Build for production:

npm run build
Project Structure
src/
  components/
    common/
    dashboard/
    layout/
  pages/
  context/
  hooks/
  data/
  utils/
  config/
Notes

The application uses functional components and hooks throughout.
The theme system supports both light and dark modes and applies styles consistently across all screens.

The main focus of this implementation was:

Visual consistency

Responsive behavior

Reusable components

Clean structure

Additional features like backend integration, authentication, and real-time updates can be added in future iterations.