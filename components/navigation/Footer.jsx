import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-5 border-t-2 border-[#969494]">
      <div className=" max-w-5xl mx-auto flex items-start justify-between pb-20">
        <div className="flex flex-col">
          <p className="font-semibold text-[19px] my-3"> Marketplace</p>
          <Link href={"#"} className="my-1 text-[#edf0f2]">
            Explore
          </Link>
          <Link href={"#"}>Profile</Link>
          <Link href={"#"}>Login</Link>
          <Link href={"#"}>Register</Link>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[19px] my-3"> Resources</p>
          <Link href={"#"} className="my-1 text-[#edf0f2]">
            Frequently asked questions
          </Link>
          <Link href={"#"}>Terms and conditions</Link>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[19px] my-3"> Company</p>
          <Link href={"#"}>Contact Us</Link>
          <Link href={"#"}>About Us</Link>
        </div>
      </div>
      <div className="mx-auto max-w-4xl w-full">
        {" "}
        <p className="text-center">
          Copyright © EliteNFTVault, INC. {new Date().getFullYear()} All rights
          reserved.{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
