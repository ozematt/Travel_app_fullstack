# Travel

Welcome to my project **Travel**! 🎒✨ The project was created based on a free layout from Figma: [Travel UI Kit](https://www.figma.com/community/file/993910904620677970). The goal of this project was to practice working with **TailwindCSS** as well as integrating with modern frontend and backend tools.

## Features

- **Responsiveness**: The app adjusts to different screen sizes (mobile-first design).
- **Theme Switcher**: The ability to switch between light and dark themes.
- **User Management**: Adding and storing users in the database.
- **Form Validation**: Forms are created using **React Hook Form** and validated with **Zod**.
- **State Management**: **Context API** is used for global state management in the app.

## Screenshots

### Main View

![Main View - Light Theme](./screenshots/Main_light.png)
![Main View - Dark Theme](./screenshots/Main_dark.png)

### Main View - Mobile

![Main View - Mobile](./screenshots/Mobile-view_both-Theme.png)

### Registration Form

![Registration Form - Light Theme](./screenshots/SignUp-bothTheme.png)

## Technology

The project was built using the following technologies:

### FRONTEND:

- **Vite**: A modern tool for building frontend applications.
- **TailwindCSS**: A modern CSS framework.
- **TypeScript**: Static typing for JavaScript.
- **React**: A library for building user interfaces.
- **React Router**: A tool for managing routing in a React application.
- **React Hook Form**: A tool for handling forms in React.
- **Zod**: A data validation library.
- **Vitest** and **React Testing Library**: Tools for unit testing.

### BACKEND:

- **Node.js/Express.js**: Platform and framework used for creating the server and backend logic.
- **Prisma ORM**: A tool for object-relational mapping and database management.
- **PostgreSQL**: A relational database used for storing data.
- **JWT (JSON Web Tokens)**: Technology used for user authentication.
- **bcryptjs**: A library for securely hashing user passwords before saving them in the database.
- **CORS**: Middleware enabling resource sharing between different domains.
- **Docker**: A containerization tool that allows easy deployment and management of the app in isolated environments.

The project is configured to run in Docker containers, ensuring smooth collaboration between the frontend and backend, and maintaining consistency across deployment environments.

### Installation

To install the project, follow the steps below:

1. **Clone the repository:**
   Fork the repository to your GitHub account, then clone it locally.
   ```sh
   git clone https://github.com/ozematt/Travel_app_fullstack.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd Travel_app_fullstack
   ```
   
3. **Build and run the containers:**
   Ensure Docker is installed and running. Then, run the following command.
   ```sh
   docker-compose up --build
   ```

5. **Access the app:**
   - **Frontend**: http://localhost:5173/
   - **Backend**: http://localhost:5005/

## Summary

This project was created for learning and practicing working with modern frontend and backend technologies. Thank you for visiting the repository! 😊
