import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_STELLAR_NETWORK: z.enum(['testnet', 'mainnet']),
  NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS: z.string().min(1),
  NEXT_PUBLIC_USDC_ASSET_CODE: z.string().min(1),
  NEXT_PUBLIC_USDC_ISSUER: z.string().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_STELLAR_NETWORK: process.env.NEXT_PUBLIC_STELLAR_NETWORK,
  NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_SOROBAN_CONTRACT_ADDRESS,
  NEXT_PUBLIC_USDC_ASSET_CODE: process.env.NEXT_PUBLIC_USDC_ASSET_CODE,
  NEXT_PUBLIC_USDC_ISSUER: process.env.NEXT_PUBLIC_USDC_ISSUER,
});

export type Env = z.infer<typeof envSchema>;
