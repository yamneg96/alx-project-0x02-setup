# Next.js Project Setup and Basics

This repository contains a Next.js project that demonstrates various components and features, including:

- Basic routing with Next.js Pages Router
- Reusable components (Card, Button, Modal)
- Data fetching from external APIs
- TypeScript integration
- Tailwind CSS styling

## Features

- Responsive navigation with Header component
- Dynamic post creation with Modal component
- User and Post data fetching from JSONPlaceholder API
- Reusable UI components with TypeScript interfaces
- Modern UI with Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alx-project-0x02-setup.git
cd alx-project-0x02-setup
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
alx-project-2/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
└── public/
    └── assets/
        └── images/
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- JSONPlaceholder API

## License

This project is licensed under the MIT License.
