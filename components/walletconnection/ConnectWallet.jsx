"use client";
import ConfirmBtn from "../loading/ConfirmBtn";
import "@reown/appkit-wallet-button/react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";

const ConnectWallet = ({ setWalletAddress }) => {
  const { open, close } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected) {
      console.log(address);
      setWalletAddress(address);
    }
  }, [address]);

  return (
    <div className="">
      <ConfirmBtn
        title={"Connect Wallet"}
        otherStyles={
          " mx-2 sm:p-3 p-1 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[100px] sm:w-[150px] text-[14px] sm:text-[16px] font-semibold self-center"
        }
        handleClicked={open}
      />
    </div>
  );
};

export default ConnectWallet;
