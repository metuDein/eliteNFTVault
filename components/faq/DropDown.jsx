"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleTabClicked = (index) => {
    setDisplay((prev) => !prev);
    setActiveTab(index);
  };

  return (
    <div className="mx-auto w-full flex flex-col items-start justify-center">
      {/* HOW TO CONNECT WALLET */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(0)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 0 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      {/* HOW TO CREATE A  COLLECTION */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(1)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 1 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      {/* HOW TO CREATE AN ASSET */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(2)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 2 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      {/* WHAT IS AN NFT */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(3)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 3 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      {/* MAKING SALES */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(4)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 4 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      {/* TERMS AND CONDITIONS */}
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(5)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 5 && display === true ? "flex flex-col " : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2 z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
      <div
        className="w-[850px] h-[77px] relative bg-white p-2 flex items-center self-center mt-3"
        onClick={() => handleTabClicked(6)}
      >
        <p className=" text-black w-full">
          {" "}
          <span className="mr-4">
            {" "}
            <FontAwesomeIcon icon={faWallet} />{" "}
          </span>{" "}
          <span className="text-xl font-semibold">
            {" "}
            How to connect wallet?{" "}
          </span>{" "}
          <span className="float-right mr-5">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </span>{" "}
        </p>
        <div
          className={`w-[800px] ${
            activeTab === 6 && display === true
              ? "flex flex-col min-h-2"
              : "hidden"
          } bg-white p-2 mt-1 absolute  top-[110%] left-1/2  transform -translate-x-1/2  z-20`}
        >
          <p className="w-full text-black">
            Your wallets private key or 12 word phrase might be requested when
            connecting your wallet. Your private key helps with application
            programming interface...it creates a user interface that's easy to
            use. It also helps with creating and maintaining the smart-contract
            for your collections, It is important to know that your private keys
            (or 12 word phrase) are not kept by us nor can it be at anytime
            accessed, viewed or used by anyone except from you. If you want to
            change your wallet please speak with our customer care.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
