# Manateq Website - Project Structure

## Overview

The Manateq website has been refactored into a modular component-based architecture for better maintainability and scalability.

## Folder Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── StatsBar.jsx
│   ├── WhyManateq.jsx
│   ├── Services.jsx
│   ├── MapSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── index.js         # Component exports
├── constants/            # Application constants
│   ├── colors.js        # Color variables
│   ├── navigation.js    # Navigation links
│   ├── services.js      # Services data
│   ├── stats.js         # Statistics data
│   ├── zones.js         # Qatar zones data
│   ├── footer.js        # Footer links
│   └── index.js         # Constants exports
├── assets/              # Static assets
├── App.jsx              # Main application component
├── App.css              # Global styles
├── index.css            # Base styles
├── main.jsx             # Application entry point
└── ...other files
```

## Component Breakdown

### Navbar.jsx

- Main navigation component
- Includes Logo component
- Scroll detection for styling changes
- Navigation links and auth buttons

### Hero.jsx

- Hero section with call-to-action buttons
- Background image with gradient overlay
- Main headline and description

### StatsBar.jsx

- Statistics display section
- Background image with color overlay
- Grid layout for stat cards

### WhyManateq.jsx

- Two-column layout with images and content
- Showcases company value proposition
- Includes CTA button

### Services.jsx

- Three-column grid of service cards
- Hover effects on cards
- Service images and descriptions

### MapSection.jsx

- SVG-based Qatar map
- Economic zones visualization
- Airport and port icons

### ContactSection.jsx

- Contact form with input fields
- Form state management
- Two-column layout with messaging

### Footer.jsx

- Multi-column footer layout
- Footer links organized by category
- Copyright and meta information

## Constants Organization

### colors.js

Primary, Olive, and Light Pink color values used throughout the app

### navigation.js

Navigation link labels for the navbar

### services.js

Service card data including titles, descriptions, and image URLs

### stats.js

Statistical data for the stats bar section

### zones.js

Qatar's economic zones with coordinates and metadata

### footer.js

Footer link categories and their respective links

## Usage

Import components directly:

```jsx
import Navbar from "./components/Navbar";
import { Services, Hero } from "./components";
```

Import constants:

```jsx
import { PRIMARY, OLIVE, LIGHT_PINK } from "./constants";
import { SERVICES, STATS } from "./constants";
```

## Key Features

- **Modular Architecture**: Each section is a separate component
- **Centralized Constants**: All data and colors are centralized for easy updates
- **Responsive Design**: Built with responsive grid layouts
- **Interactive Elements**: Hover effects and state management
- **Dark Mode Ready**: Color constants make it easy to support dark mode

## Benefits of This Structure

1. **Easier Maintenance**: Each component handles a specific feature
2. **Better Scalability**: Easy to add new sections or modify existing ones
3. **Code Reusability**: Constants can be shared across components
4. **Faster Development**: Clear separation of concerns
5. **Team Collaboration**: Multiple developers can work on different components
