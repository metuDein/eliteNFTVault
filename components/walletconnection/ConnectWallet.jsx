"use client";
import ConfirmBtn from "../loading/ConfirmBtn";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { createCoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";

const providerOptions = {
  // Binance Wallet
  binancechainwallet: {
    package: true,
  },

  // Trust Wallet (via WalletConnect)
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: "https://mainnet.infura.io/v3/3dd5d66f6fdf4dcba9f6e674472729fc", // Ethereum Mainnet RPC URL
      },
    },
  },

  // Phantom Wallet (for Solana)
  phantom: {
    package: () => {
      if (typeof window !== "undefined" && window.phantom?.ethereum) {
        return window.phantom.ethereum;
      }
      throw new Error("Phantom Wallet is not installed");
    },
  },

  // Coinbase Wallet
  coinbasewallet: {
    package: createCoinbaseWalletSDK,
    options: {
      appName: "EliteNFTVault", // Replace with your app name
      infuraId: {
        1: "https://mainnet.infura.io/v3/3dd5d66f6fdf4dcba9f6e674472729fc",
      }, // Replace with your Infura Project ID
    },
  },
};
const ConnectWallet = () => {
  const connectWallet = async () => {
    try {
      // Initialize Web3Modal
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      // Connect to wallet
      const web3ModalInstance = await web3Modal.connect();

      console.log(web3ModalInstance);

      console.log(ethers);

      // Wrap the provider with ethers.js
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );

      console.log(web3ModalProvider);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="">
      <ConfirmBtn
        title={"Connect Wallet"}
        otherStyles={
          " mx-2 p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[150px] text-[16px] font-semibold self-center"
        }
        handleClicked={connectWallet}
      />
    </div>
  );
};

export default ConnectWallet;
