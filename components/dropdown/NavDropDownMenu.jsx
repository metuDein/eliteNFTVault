"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const NavDropDownMenu = ({ triggerStyle, user }) => {
  return (
    <DropdownMenu className={``}>
      <DropdownMenuTrigger>
        <div
          className={`flex items-center justify-between bg-[#582b71]/70 px-[4px] py-1 rounded-[5px] ${
            user?.walletAddress && "w-[150px]"
          }`}
        >
          <div>
            {
              <Image
                src={user?.image}
                alt="user image"
                width={300}
                height={300}
                className="w-[36px] h-[36px] rounded object-fill outline-0"
              />
            }
          </div>
          {user?.walletAddress && (
            <div className="flex flex-col items-end justify-center mx-[2px]">
              <p>
                {" "}
                {(user?.balance).toFixed(5)}{" "}
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-gradient-to-b from-[#141414] to-[#3c3c3b]"
                />{" "}
              </p>
              <p>
                {" "}
                <span className="w-1 h-1 rounded-full bg-green-600 inline-flex mx-[1px]"></span>
                {`${(user?.walletAddress)
                  .slice(0, 4)
                  .toString()}....${(user?.walletAddress)
                  .slice(-4)
                  .toString()}`}
              </p>
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              Profile
            </Link>
          </DropdownMenuItem>
          {/* sub menu to create */}
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              Create
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              FAQs
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              Admin Panel
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"} className="w-full text-left font-semibold">
              LogOut
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavDropDownMenu;
