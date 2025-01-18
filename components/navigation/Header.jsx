"use client";
import { useState, useEffect } from "react";
import { useDataContext } from "../context/DataProvider";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ConfirmBtn from "../loading/ConfirmBtn";
import Link from "next/link";
import NavDropDownMenu from "../dropdown/NavDropDownMenu";
import ConnectWallet from "../walletconnection/ConnectWallet";

const Header = () => {
  const { user } = useDataContext();
  const [search, setSearch] = useState("");

  return (
    <header className="w-full p-2 fixed shadow-2xl shadow-black flex items-center justify-center z-[1000] bg-[#281549]/80">
      <nav className="flex items-center justify-between max-w-7xl w-full">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/assets/logo.png"}
            alt="app logo"
            width={500}
            height={500}
            className="w-[35px] h-[35px] mr-2"
          />
          <h1 className="text-white font-semibold">EliteNFTVault</h1>
        </Link>

        <form className="flex items-center justify-start p-1 rounded-[3px] bg-[#d9d9d9]/30 w-[400px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
          <input
            type="text"
            placeholder="find a collection or asset"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white placeholder:text-[#d9d9d9] mx-2 border-0 outline-0"
          />
        </form>
        {/* when user is not loggedin */}
        {!user?.username && (
          <div className="flex items-center justify-between basis-2/5">
            <div className="flex items-center justify-between basis-2/4">
              <Link
                href={"#"}
                className="hover:underline hover:scale-[1.1] transform duration-300"
              >
                Explore
              </Link>
              <Link
                href={"#"}
                className="hover:underline hover:scale-[1.1] transform duration-300"
              >
                Help
              </Link>
              <Link
                href={"#"}
                className="hover:underline hover:scale-[1.1] transform duration-300"
              >
                Login
              </Link>
            </div>
            <ConfirmBtn
              title={"Get Started"}
              otherStyles={
                "p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[200px] text-[16px] font-semibold self-center"
              }
            />
          </div>
        )}
        {user?.username && (
          <div className="flex items-center justify-between basis-2/5">
            <div className="flex items-center justify-between flex-1 px-10">
              <Link
                href={"#"}
                className="hover:underline hover:scale-[1.1] transform duration-300 ml-10"
              >
                Explore
              </Link>

              <div className="bg-[#ef8bf7]/40 p-1 w-[39px] h-[39px] flex items-center justify-center rounded-[10] cursor-pointer">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <NavDropDownMenu user={user} />
              <ConnectWallet />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
