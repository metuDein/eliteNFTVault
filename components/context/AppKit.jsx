// context/index.tsx
"use client";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import {
  mainnet,
  arbitrum,
  avalanche,
  base,
  optimism,
  polygon,
  sepolia,
} from "@reown/appkit/networks";
import React from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "elitenftvault",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon, sepolia],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function AppKit({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default AppKit;

// "use server";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiProvider } from "wagmi";
// import { config } from "@/config";

// // 2. Set up a React Query client.
// const queryClient = new QueryClient();

// export default async function AppKit({ children }) {
//   // 3. Wrap app with Wagmi and React Query context.
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   );
// }

// context/AppKit.tsx

// "use client";

// import { createAppKit } from "@reown/appkit/react";
// import { EthersAdapter } from "@reown/appkit-adapter-ethers";
// import { mainnet, arbitrum } from "@reown/appkit/networks";

// // 1. Get projectId at https://cloud.reown.com
// const projectId = "53f6bd310401fb171efc6b8825536d4e";

// // 2. Create a metadata object
// const metadata = {
//   name: "elitenftvault",
//   description: "AppKit Example",
//   url: "https://reown.com/appkit", // origin must match your domain & subdomain
//   icons: ["https://assets.reown.com/reown-profile-pic.png"],
// };

// // 3. Create the AppKit instance
// createAppKit({
//   adapters: [new EthersAdapter()],
//   metadata,
//   networks: [mainnet, arbitrum],
//   projectId,
//   features: {
//     analytics: true, // Optional - defaults to your Cloud configuration
//   },
// });

// export function AppKit({ children }) {
//   return (
//     <>{children}</> //make sure you have configured the <w3m-button> inside
//   );
// }
