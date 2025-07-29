# Office Out-Time Calculator ⏰

A lightweight, mobile-friendly web app that calculates your office out-time based on your punch-in time. Designed for professionals who follow an 8 hour 30 minute work schedule.

## 🚀 Features

- User-friendly interface using Bootstrap 4
- Validates in-time within office hours (8:00 AM to 6:30 PM)
- Displays calculated out-time in 12-hour format (e.g., 5:06 PM)
- Error handling for late punch-ins or out-of-range entries
- Responsive design for mobile and desktop use
- Dynamic alert messages with Bootstrap styling

## 📦 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 4

## 🧮 How It Works

1. User enters an in-time using the native time picker.
2. Script adds 8 hours 30 minutes to the input time.
3. Validates that out-time doesn’t exceed 6:30 PM.
4. Displays result using Bootstrap alert.

## 📱 Mobile Compatibility

Fully responsive for mobile browsers. Optimized for quick input and fast results.

## 🔧 Setup

No installation needed — just open the `index.html` file in your browser.

## 📁 File Structure
├── index.html       # Main HTML page with Bootstrap structure
├── style.css        # Optional custom styling
└── script.js        # Time calculation logic and input handling
