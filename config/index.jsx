import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum } from "@reown/appkit/networks";

// Get projectId from environment variables
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Define the supported networks
export const networks = [mainnet, arbitrum];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: typeof window === "undefined" ? undefined : cookieStorage, // Ensure storage is accessible in SSR
  }),
  ssr: true,
  projectId,
  networks,
});

// Export the adapter's wagmiConfig for use in the app
export const config = wagmiAdapter.wagmiConfig;
