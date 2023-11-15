# Next.js Project: GET COMMS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

UI component for technical test for Fulltimeforce company.

## ✨ About this Project

This frontend repository leverages React with Next.js, showcasing best practices in frontend development for a seamless user experience and developer-friendly codebase.

### Component-Based Architecture

Adopting a component-based architecture, aligning with React's design principles:

- `components` directory is organized by feature (e.g., Branches, Commits, Dashboard) for better maintainability.
- Shared components like `Header` and `Subheader` ensure UI consistency and reusability.

### Clean and Scalable File Organization

- `pages` directory uses file-based routing, simplifying navigation within the app.
- `public` for static assets to optimize loading times.
- `styles` with SCSS modules offer scoped and maintainable stylesheets.`

### Environment Configuration

Separate .env files for development and production (env.development, env.production) to manage environment-specific variables safely and conveniently.

### Continuous Integration and Continuous Deployment (CI/CD)

CI/CD pipelines via GitHub Actions automate deployment and successful builds are deployed to Azure App Service seamlessly as a `Docker Image`. This practice enhances the reliability of the deployment process and accelerates the delivery of new features to production. 

On this project, Docker Files are only available for deploying purposes.

### Code Quality and Standards

- Strict TypeScript configuration enforces type safety and reduces runtime errors.
- ESLint and Prettier ensure code style consistency across the codebase.

### Responsive and Adaptive Design

- UI Components from MAUI library.
- Responsive design practices ensure that the application is accessible and functional on a variety of devices and screen sizes.
- The ThemeRegistry allows for theme customization and adaptive design strategies.

By integrating these practices, the frontend repository provides a robust and scalable application that is both efficient for developers to work on and powerful for users to interact with.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### 🔧 Installation

1. Clone the repository:

```cmd
git clone https://github.com/stephgl07/project-getcomms.git
```

2. Navigate to the project directory:

```bash
cd Fulltimeforce.GetComms.UI
```

3. Install the dependencies:

```bash
npm install
```

4. Run the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ CI/CD

Pipeline is configured on the root path of the repository. It is executed when making a push to the "main" branch.

You can test the deployment result here! => [https://project-getcomms-ui.azurewebsites.net](https://project-getcomms-ui.azurewebsites.net)

## 🛠️ Built With

- Nest.js 13
- App Router
- TypeScript
- Material UI
- Sass Modules
- Github Actions
- Docker
- Azure App Service

## 🖋️ Authors

Stefano Garcia - Fullstack Dev
