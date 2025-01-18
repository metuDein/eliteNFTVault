"use client";
import DropDown from "@/components/faq/DropDown";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-screen p-2">
      <Image
        src={"/assets/stars.jpg"}
        alt="faq"
        width={500}
        height={500}
        color="white"
        className="w-[150px] h-[150px] object-cover mx-auto"
      />
      <h2 className="text-white font-bold text-2xl text-center">
        Frequently Asked Questions{" "}
      </h2>
      <p className="w-[450px] mx-auto text-center">
        These are the most commonly asked questions about NFT site. Can't find
        what you’re looking for?{" "}
        <Link href={"/contact"} className="underline">
          {" "}
          Chat with our team{" "}
        </Link>
      </p>
      <DropDown />
    </div>
  );
};
export default page;
