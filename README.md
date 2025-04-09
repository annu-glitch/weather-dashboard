# Weather Dashboard

A responsive and dynamic weather dashboard built with **React.js**, **Vite**, and **Tailwind CSS**. This app allows users to search for any city and view real-time weather information using data from the **OpenWeatherMap API**.

---

## Live Demo

[View Live App](https://annu-glitch.github.io/weather-dashboard/)

---

## Features

- Search for any city to get real-time weather info
- Displays:
  - City name
  - Current temperature (°C)
  - Weather condition (Sunny, Rainy, etc.)
  - Humidity (%)
  - Wind speed (km/h)
  - Weather icon
- Loader while fetching data
- Error handling for invalid city names or API failures
- Responsive UI for desktop and mobile

---

## Tech Stack

- **Framework**: React.js + Vite
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap
- **State Management**: React Hooks
- **Deployment**: GitHub Pages

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/annu-glitch/weather-dashboard.git
cd weather-dashboard

2. Install dependencies

npm install 

3. Run the development server

npm run dev

4. Build for production

npm run build

5. Preview the production build

npm run preview
__________________________________________________________________________________________________________________________________________________________________________

API Integration:

This app uses the OpenWeatherMap Current Weather API.

API Endpoint:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
Get your free API key at: https://openweathermap.org/api

Add the key inside your React component (App.jsx) where the fetch call is made.

Deployment Instructions
This app is deployed using GitHub Pages via the gh-pages npm package.

1. Update vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/weather-dashboard/' // your GitHub repo name
});


2. Add deploy scripts to package.json

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

3. Deploy using the command line

npm run deploy

4. App will be live at:

https://annu-glitch.github.io/weather-dashboard/
_________________________________________________________________________________________________________________________________________________________________________

Contact
Author: Annu Priya
Email: 2205448@kiit.ac.in
GitHub: https://github.com/annu-glitch
__________________________________________________________________________________________________________________________________________________________________________

License
This project is open source and free to use for learning purposes.

