# Getting Started

This project was bootstrapped with [Vite](https://vitejs.dev/guide).

1. Clone the repo

```git clone https://github.com/AdamJamiu/Lendsqr.git```

2. Install dependencies

```npm install```

3. Start the development server

```npm run dev```

4. Open the project in your browser (http://127.0.0.1:5173/) and start coding!

## Available Scripts

In the project directory, you can run:

### `npm dev` - Runs the app in the development mode.

### `npm test` - Launches the test runner in the interactive watch mode.

### `npm build` - Builds the app for production to the `build` folder.

### Project Structure

```arduino
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   └── logo.svg
│   │   |   ├── images  
│   ├── components
│   │   ├── customFilterMenu
│   │   │   ├── index.tsx
│   │   │   └── index.scss
│   │   ├── Layout
│   │   │   ├── navbar
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.scss
│   │   │   └── sideMenu
│   │   │       ├── index.tsx
│   │   │       └── index.scss
│   │   ├── loading
│   │   │   ├── index.tsx
│   │   │   └── index.scss
│   │   ├── menu
│   │   │   ├── index.tsx
│   │   │   └── index.scss
│   │   ├── userDetails
│   │   │   ├── index.tsx
│   │   │   └── index.scss
│   │   └── users
│   │       ├── index.tsx
│   │       └── index.scss
│   ├── context
│   │   └── index.tsx
        |── appProvider.tsx
    |── data  
    |   └── status.ts
    |── hooks
    |   └── useFetch.ts
    |    |── useFetchId.ts
    |── models
    |   └──inerface
    |       └── props.ts  
    |── styles
    |   └── index.tsx
    |── App.tsx
    |── index.scss
    |── main.tsx
    |── vite-env.d.ts
    |── .gitignore
    |── index.html
    |── package.lock.json
    |── package.json
    |── README.md
    |── tsconfig.json
    |── vite.config.ts


## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/).
