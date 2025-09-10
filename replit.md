# Stylvia Fashion Brand Website

## Overview

Stylvia is a modern, fully responsive clothing brand website built as a single-page application. The project showcases a fashion brand dedicated to making everyday clothing trendy, comfortable, and affordable. The website features multiple sections including hero banner, collections showcase, lookbook gallery, testimonials, blog, newsletter signup, and contact forms. The application emphasizes visual appeal with smooth animations, hover effects, and a sophisticated design system using a warm color palette of creams, blush, and rose tones.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable UI components
- **Animation**: Framer Motion for smooth animations, transitions, and interactive hover effects throughout the site
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for consistent type checking across frontend and backend
- **Development Setup**: Custom Vite integration for seamless development experience with HMR
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **Session Management**: Prepared for PostgreSQL session storage with connect-pg-simple

### Design System
- **Typography**: Google Fonts integration with Playfair Display (serif) and Montserrat (sans-serif)
- **Color Scheme**: Custom CSS variables defining a sophisticated palette with cream, blush, beige, and rose tones
- **Component Architecture**: Modular React components with consistent styling patterns and reusable UI elements
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Dark Mode**: CSS variable-based theme switching capability built into the design system

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: User table with id (UUID), username (unique), and password fields
- **Validation**: Zod integration with Drizzle for runtime type validation
- **Migrations**: Drizzle Kit for database schema management and migrations

### Animation & Interaction Patterns
- **Page Transitions**: Smooth scroll animations between sections
- **Component Animations**: Staggered animations for lists and grids using Framer Motion
- **Hover Effects**: Sophisticated hover states on images, buttons, and cards
- **Lightbox Gallery**: Custom lightbox implementation for the lookbook section with keyboard navigation
- **Floating Elements**: CSS animations for background decorative elements

## External Dependencies

### UI & Styling
- **Radix UI**: Comprehensive primitive components for building accessible interfaces
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **shadcn/ui**: Pre-built component library with customizable design tokens
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Consistent icon library for UI elements

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay for Replit environment
- **TypeScript**: Static type checking with strict configuration
- **ESBuild**: Fast bundling for production server builds

### Database & ORM
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **Drizzle Kit**: Database toolkit for schema management and migrations
- **Neon Database**: Serverless PostgreSQL (configured for production use)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Form Handling & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation

### Data Fetching
- **TanStack React Query**: Server state management with caching and background updates
- **Native Fetch API**: HTTP client for API requests with credential handling

### Development Environment
- **Replit Integration**: Cartographer plugin for Replit-specific development features
- **Runtime Error Modal**: Development error overlay for better debugging experience