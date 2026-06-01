# 🚀 Blog for Developers

A modern, full-stack blog platform designed for developers. Built with the MERN stack and styled with the latest Tailwind CSS 4 and Flowbite.

## ✨ Features

- **Responsive Design**: Mobile-first UI using Tailwind CSS 4.
- **Modern Tech Stack**: React 19 and Node.js 22+ compatible.
- **Authentication**: Secure JWT-based authentication (Sign Up / Sign In).
- **Developer Dashboard**: Dedicated space for managing posts and profile.
- **Code Quality**: Pre-configured with ESLint, Prettier, and Husky hooks.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Utilizing the new React Compiler.
- **Vite**: Ultra-fast build tool and dev server.
- **Tailwind CSS 4**: The latest in utility-first CSS.
- **Flowbite React**: Premium UI components for React.
- **React Router 7**: Robust client-side routing.

### Backend
- **Node.js & Express 5**: Modern server-side framework.
- **MongoDB & Mongoose**: Flexible NoSQL database modeling.
- **Bcryptjs**: Password hashing for security.
- **Dotenv**: Environment variable management.

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (Local or Atlas)
- NPM or Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pruthviraj-gaikwad/Blog-for-developer.git
   cd Blog-for-developer
   ```

2. **Install Dependencies**
   ```bash
   # Install root dependencies (API & Tooling)
   npm install

   # Install Client dependencies
   cd Client
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

### Running the Application

**Run Backend (Root)**
```bash
npm run dev
```
The server will start on `http://localhost:3000`.

**Run Frontend (Client)**
```bash
cd Client
npm run dev
```
The frontend will start on `http://localhost:5173`.

## 📂 Project Structure

```text
├── api/                # Express Backend
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── index.js        # Server entry point
├── Client/             # React Frontend (Vite)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route pages
│   │   └── App.jsx     # Main App component
└── package.json        # Project manifest & scripts
```

## 📜 Available Scripts

- `npm run dev`: Starts the backend with Nodemon.
- `npm run start`: Starts the backend in production mode.
- `npm run lint`: Runs ESLint for code quality.
- `npm run format`: Formats code using Prettier.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
Developed with ❤️ by [Pruthviraj Gaikwad](https://github.com/pruthviraj-gaikwad)
