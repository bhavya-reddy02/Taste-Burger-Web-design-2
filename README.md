# Taste Burger Web Application

A fully responsive, modern React-based food delivery web application designed to provide a premium user experience. This project demonstrates best practices in component-based architecture, global state management, external API integration, form validation, and GDPR compliance.

## 🍔 Features

- **Dynamic Menu via External API**: The menu section fetches real-time recipe data and images from [TheMealDB public API](https://www.themealdb.com/api.php), combined with high-quality local assets for a robust presentation.
- **Live Search Filtering**: Instantly filter the dynamically loaded menu items by title using the integrated search bar.
- **Global Cart State Management**: Uses React Context (`CartContext`) to manage global cart state, allowing users to add items from any component and view them in a globally accessible Offcanvas cart panel.
- **Robust Form Validation**: The contact form features comprehensive client-side validation ensuring Name, valid Email formatting, and Messages are provided before submission.
- **GDPR Compliance**: Includes a custom Cookie Consent Banner that stores user preferences ("Accept" or "Decline") securely in the browser's `localStorage`.
- **Fully Responsive Design**: Built seamlessly with React Bootstrap to ensure the application looks perfect on desktop, tablet, and mobile devices.
- **Clean Component Architecture**: Semantic, human-readable React components and optimized routing using `react-router-dom`.

## 🛠 Tech Stack

- **Frontend Framework**: React.js
- **Styling & UI**: React-Bootstrap, Vanilla CSS
- **Routing**: React Router DOM
- **External Data**: `fetch` API for network requests
- **Icons**: Bootstrap Icons

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhavya-reddy02/Taste-Burger-Web-design-2.git
   cd Taste-Burger-Web-design-2/food-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will run locally at `http://localhost:3000`.

## 📂 Project Structure

```text
food-app/
├── public/                 # Static assets and index.html
└── src/
    ├── assets/             # High-quality image assets
    ├── components/         # Reusable UI components
    │   ├── Layouts/        # Core layout wrappers (Header, Footer, Cards)
    │   ├── CartOffcanvas.js# Global cart side-panel
    │   └── CookieBanner.js # GDPR compliance banner
    ├── context/            # React Context API providers (CartContext)
    ├── pages/
    │   └── Home/           # Modularized landing page sections (Hero, Menu, About, etc.)
    ├── styles/             # Global and component-specific CSS
    ├── App.js              # Main application router and state provider
    └── index.js            # React entry point
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bhavya-reddy02/Taste-Burger-Web-design-2/issues).