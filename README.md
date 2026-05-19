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

## Environment Variables

All environment variables are validated at startup using [Zod](https://zod.dev) via `src/lib/env.ts`. The app will fail fast with a clear error if any required variable is missing or invalid.

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Public URL of the app | `http://localhost:3000` |
| `NEXT_PUBLIC_API_BASE_URL` | NestJS backend base URL | `https://api.example.com` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | Stellar network (`testnet` or `mainnet`) | `testnet` |
| `NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS` | Soroban smart contract address | `CXXX...` |
| `NEXT_PUBLIC_USDC_ASSET_CODE` | USDC asset code | `USDC` |
| `NEXT_PUBLIC_USDC_ISSUER` | USDC issuer account address | `GBBD...` |

### CI / CD

In your CI pipeline (e.g. GitHub Actions), set each variable as a repository secret and expose them as environment variables in the build step:

```yaml
- name: Build
  env:
    NEXT_PUBLIC_APP_URL: ${{ secrets.NEXT_PUBLIC_APP_URL }}
    NEXT_PUBLIC_API_BASE_URL: ${{ secrets.NEXT_PUBLIC_API_BASE_URL }}
    NEXT_PUBLIC_STELLAR_NETWORK: ${{ secrets.NEXT_PUBLIC_STELLAR_NETWORK }}
    NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS: ${{ secrets.NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS }}
    NEXT_PUBLIC_USDC_ASSET_CODE: ${{ secrets.NEXT_PUBLIC_USDC_ASSET_CODE }}
    NEXT_PUBLIC_USDC_ISSUER: ${{ secrets.NEXT_PUBLIC_USDC_ISSUER }}
  run: npm run build
```

> **Never commit `.env.local` or any file containing real secrets.** Only `.env.example` (with placeholder values) should be committed.

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
