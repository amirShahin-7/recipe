
# 🍽️ Recipe App

A modern, responsive recipe application built with React that allows users to browse, search, and explore delicious recipes from around the world. The app integrates with TheMealDB API to provide a comprehensive collection of meals with detailed instructions, ingredients, and cooking information.

## 🌐 Live Demo

**Deployed on Vercel:** [https://recipe-five-beta.vercel.app/](https://recipe-five-beta.vercel.app/)

## ✨ Features

- **Browse Recipes**: Explore a wide variety of recipes from different cuisines
- **Category Filtering**: Filter recipes by categories (Beef, Chicken, Dessert, etc.)
- **Detailed Recipe View**:
  - Full recipe instructions
  - Complete ingredient list with measurements
  - Recipe images
  - Category and area information
  - Links to YouTube tutorials and source websites
- **Responsive Design**:
  - Mobile-friendly interface with collapsible sidebar
  - Desktop-optimized layout
  - Adaptive grid system for meal cards
- **Smooth Navigation**:
  - React Router for seamless page transitions
  - Breadcrumb navigation
  - 404 error handling
- **Loading States**: Beautiful loading animations while fetching data
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Technologies Used

- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.10.1) - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Axios** (v1.13.2) - HTTP client for API requests
- **React Icons** (v5.5.0) - Icon library
- **TheMealDB API** - Recipe data source

## 📁 Project Structure

```
recipe/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── Components/
│   │   ├── footer/
│   │   │   └── Footer.jsx
│   │   ├── layout/
│   │   │   └── Layout.jsx
│   │   ├── loading/
│   │   │   └── Loading.jsx
│   │   ├── mealDetails/
│   │   │   └── MealDetails.jsx
│   │   ├── meals/
│   │   │   ├── MealCard.jsx
│   │   │   └── Meals.jsx
│   │   ├── notFound/
│   │   │   └── NotFound.jsx
│   │   ├── sideBar/
│   │   │   └── SideBar.jsx
│   │   └── tabs/
│   │       ├── Tabs.jsx
│   │       └── TabsMobile.jsx
│   ├── Pages/
│   │   ├── mealDetails/
│   │   │   └── MealDetailsPage.jsx
│   │   └── meals/
│   │       └── MealsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 📡 API Integration

This application uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe

## 🎨 Key Components

### Layout

- **Layout.jsx**: Main layout wrapper with sidebar and footer
- **SideBar.jsx**: Responsive navigation sidebar with mobile menu
- **Footer.jsx**: Application footer

### Pages

- **MealsPage**: Displays grid of meal cards
- **MealDetailsPage**: Shows detailed recipe information

### Components

- **Meals.jsx**: Fetches and displays meal list based on category
- **MealCard.jsx**: Individual meal card component
- **MealDetails.jsx**: Detailed recipe view with ingredients and instructions
- **Tabs.jsx**: Category filter tabs (desktop)
- **TabsMobile.jsx**: Mobile category selector
- **Loading.jsx**: Loading spinner component
- **NotFound.jsx**: 404 error page

## 🚢 Deployment

The application is deployed on **Vercel** with automatic deployments from the main branch.

### Deployment Configuration

The `vercel.json` file contains deployment settings for Vercel.

## 🎯 Features in Detail

### Category Navigation

- Browse all recipes or filter by specific categories
- Dynamic category tabs loaded from the API
- Active category highlighting

### Recipe Details

- High-quality recipe images
- Step-by-step cooking instructions
- Complete ingredient list with measurements in a table format
- Category and area badges
- Direct links to YouTube video tutorials
- Source website links

### Responsive Design

- Mobile-first approach
- Collapsible sidebar menu on mobile devices
- Responsive grid layout that adapts to screen size
- Touch-friendly interface elements

- Vercel for hosting the application

---

**Built with ❤️ using React and Vite**
