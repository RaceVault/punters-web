# punters-web

A Next.js 16+ web application built with App Router, TypeScript, and TailwindCSS.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com)
- [ESLint](https://eslint.org) + [Prettier](https://prettier.io)

## Local Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/RaceVault/punters-web.git
   cd punters-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment variables file and fill in the values:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/          # App Router pages and layouts
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Third-party library setup and clients
├── types/        # TypeScript type definitions
└── utils/        # Utility/helper functions
```

## Path Aliases

| Alias              | Resolves to         |
| ------------------ | ------------------- |
| `@/*`              | `src/*`             |
| `@/components/*`   | `src/components/*`  |
| `@/lib/*`          | `src/lib/*`         |
| `@/hooks/*`        | `src/hooks/*`       |
| `@/types/*`        | `src/types/*`       |
| `@/utils/*`        | `src/utils/*`       |

## Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start development server           |
| `npm run build`      | Build for production               |
| `npm run start`      | Start production server            |
| `npm run lint`       | Run ESLint                         |
| `npm run lint:fix`   | Run ESLint with auto-fix           |
| `npm run format`     | Format all files with Prettier     |
| `npm run format:check` | Check formatting without writing |
