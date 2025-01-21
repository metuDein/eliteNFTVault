// config/index.tsx

import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, sepolia } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = "53f6bd310401fb171efc6b8825536d4e";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [mainnet, arbitrum, sepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
