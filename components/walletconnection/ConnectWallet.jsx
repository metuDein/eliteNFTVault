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
          " mx-2 p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[150px] text-[16px] font-semibold self-center"
        }
        handleClicked={open}
      />
    </div>
  );
};

export default ConnectWallet;
