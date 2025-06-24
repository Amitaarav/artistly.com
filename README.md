#  Artistly – Performing Artist Booking Platform (Frontend Assignment)

A full-stack-ready **frontend demo** of a performing artist booking platform built using **Next.js (App Router)**, **React**, **Tailwind CSS**, and **shadcn/ui**. This project was completed as part of a frontend assessment.

---

##  Live Demo

[ Deployed on Vercel](https://your-deployment-url.vercel.app)

---

##  Project Structure

```bash
# Artistly – Performing Artist Booking Platform (Frontend Assignment)

A mobile-responsive, frontend-only demo for a performing artist booking platform built using **Next.js App Router**, **React**, **Tailwind CSS**, **shadcn/ui**, and **React Hook Form**.  
It features dynamic filtering, onboarding forms, a dashboard, and shared global state management via Context API.

---

##  Live Preview

[ Deployed on Vercel](https://your-vercel-url.vercel.app)

---

##  Project Structure

```bash
.
├── app/
│   ├── artists/              # Artist Listing Page
│   ├── dashboard/            # Manager Dashboard Page
│   ├── onboarding/           # Artist Onboarding Page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx            # App layout with providers
│   └── page.tsx              # Homepage entry
│
├── assets/
│   ├── images/               # Static images for UI
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
│   └── ArtistContext.tsx     # Global artist & booking state
│
├── hooks/
│   └── useDebounce.ts        # Custom hook for debounced search
│
├── lib/
│   ├── dummyData.ts          # Sample artist & booking JSON data
│   └── utils.ts              # Utility functions (if any)
│
├── public/
│   └── placeholder.svg       # Optional assets
│
├── styles/
│   └── (tailwind.config etc.)



Getting Started
1. Clone and install dependencies
bash
Copy code
git clone https://github.com/your-username/artistly.git
cd artistly
npm install

2. Run the app locally
bash
Copy code
npm run dev
Technologies Used
Tech	Purpose
Next.js (v13+)	React framework with App Router support
React	Component architecture
Tailwind CSS	Utility-first styling
shadcn/ui	Modern accessible UI component library
React Hook Form + Zod	Form handling with validation and schema safety
Context API	Global state management for artists and bookings
Vercel	Deployment platform for frontend apps

 Key Features
 Homepage
Platform overview

CTA to explore artists

Artist category highlights

Artist Listing Page
Dynamic filters: Category, Location, Price Range

Search with debounced input

Grid/List toggle

Context-powered global state filtering

Artist Onboarding Form
Multi-section form

React Hook Form + Zod validation

Multi-select checkboxes and dropdowns

Profile image upload with preview

New artist is added to global state (via Context)

Manager Dashboard
Artist overview table

Booking requests tab

Stats cards (artists, revenue, growth)

Tabbed layout with reusable components

Conditional rendering and mock booking actions

Advanced Concepts Used
1. Global State with Context API
ArtistContext.tsx manages shared state across pages (artists, bookings, filters)

addArtist and setFilters demonstrate isolated state updates

2. Debounced Search Input
useDebounce custom hook prevents over-filtering while typing

Keeps performance smooth

3. Reusability & Component Modularity
Used shadcn/ui for consistent styling

Custom Card, Badge, Table, Select, and Tabs

4. Form Validation with Zod
Declarative schema validation

Inline error feedback for better UX

5. Implemented Dark Theme

Dummy Data
All data is mocked via dummyData.ts in /lib. No real API is connected, and all logic assumes simulated backend.

Components Overview
Component	Role
ArtistOnboardingForm	Multi-step form to register a new artist
ManagerDashboard	Lists all artists and mock bookings
ArtistListing	Displays artists in grid/list mode with filters
useDebounce	Custom hook for search input debounce
ArtistContext	Global provider of artists, bookings, and filters


Why These Technologies?
Next.js (App Router): Enables file-based routing, SSR, and optimized rendering.

Tailwind CSS: Clean utility classes reduce boilerplate styling.

shadcn/ui: Headless accessible components ready for styling with Tailwind.

React Hook Form + Zod: Fast, declarative, and typesafe form handling.

Context API: Lightweight global state management without Redux.

Running Tests (Optional)
bash
Copy code
# No test suite yet, but structure allows for Jest/React Testing Library
Deployment Instructions
Push code to GitHub

Connect repo on vercel.com

Deploy with default Next.js settings

Share:

https://your-app.vercel.app

Temporary Vercel login if required

Acknowledgements
shadcn/ui

Tailwind UI

Lucide Icons

Next.js Docs

Author
Amit Kumar Gupta
LinkedIn
GitHub

Feedback & Suggestions
Feel free to open issues or reach out on email!
