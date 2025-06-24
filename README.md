### Artistly – Performing Artist Booking Platform (Frontend Assignment)
A mobile-responsive frontend demo of a performing artist booking platform built using Next.js (App Router), React, Tailwind CSS, shadcn/ui, and React Hook Form.
Developed as part of a frontend assessment – ready to be integrated into a full-stack application.

### Live Demo
Check it out live: Artistly on Vercel

### Project Structure
bash
Copy code
.
├── app/
│   ├── artists/              # Artist Listing Page
│   ├── dashboard/            # Manager Dashboard
│   ├── onboarding/           # Artist Onboarding
│   ├── layout.tsx            # App layout with providers
│   └── page.tsx              # Homepage
│
├── assets/
│   ├── images/               # UI static assets
│   └── artistsImages.ts      # Artist image imports
│
├── components/
│   ├── HomepageComponent/
│   │   ├── footersection/
│   │   ├── headersection/
│   │   └── herosection/
│   └── ui/
│       ├── ArtistListing.tsx
│       ├── ArtistsDashboard.tsx
│       └── ManagerDashboard.tsx
│
├── context/
│   └── ArtistContext.tsx     # Global state for artists & bookings
│
├── hooks/
│   └── useDebounce.ts        # Custom hook for debounced search
│
├── lib/
│   ├── dummyData.ts          # Mocked data
│   └── utils.ts              # Utility functions
│
├── public/
│   └── placeholder.svg
│
├── styles/
│   └── tailwind.config.js etc.

## Getting Started
1. Clone and install dependencies
bash
Copy code
git clone https://github.com/your-username/artistly.git
cd artistly
npm install
2. Run the development server
bash
Copy code
npm run dev
### Tech Stack
Technology	Purpose
Next.js (v13+)	App Router, file-based routing, optimized SSR
React	Component-based UI rendering
Tailwind CSS	Utility-first styling
shadcn/ui	Accessible UI components
React Hook Form	Declarative form management
Zod	Schema-based form validation
Context API	Lightweight global state for artists & filters
Vercel	Fast deployment and hosting

# Key Features
### Homepage
Overview of the platform

CTA to explore artists

Category highlights

### Artist Listing
Filter by category, location, price range

Debounced search input

Grid/List view toggle

Global filter state via Context

### Artist Onboarding Form
Multi-step form with image upload

Validated with React Hook Form + Zod

Multi-select dropdowns and checkboxes

Adds new artist to shared global state

### Manager Dashboard
Tabbed view for stats, bookings, artists

Artist overview table

Booking management (mocked)

Reusable UI components

## Advanced Concepts
1. Global State with Context API
ArtistContext.tsx manages shared data (artists, bookings, filters)

addArtist and setFilters enable modular updates

2. Debounced Search Input
Custom useDebounce hook avoids excessive filtering on input

3. Modular Components
Used shadcn/ui to build reusable Cards, Tables, Tabs, etc.

4. Schema Validation with Zod
Ensures form input safety

Immediate error feedback

5. Dark Theme Support
Fully styled for light/dark theme toggling

### Testing (Optional)
While no test suite is included, the project is structured to easily integrate:

Jest

React Testing Library

### Deployment Instructions
Push your code to a GitHub repo

Connect the repo on vercel.com

Deploy using default settings

Live link: https://your-app.vercel.app

# Dummy Data
All data is mocked via /lib/dummyData.ts – there is no backend or API integration.

## Component Overview
Component	Description
ArtistOnboardingForm	Multi-step registration form
ManagerDashboard	Dashboard with stats and booking overview
ArtistListing	Filterable artist list (grid/list toggle)
useDebounce	Debounced search functionality
ArtistContext	Global provider for artists/bookings/filters

## Author
Amit Kumar Gupta

LinkedIn

GitHub

