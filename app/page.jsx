"use client";
import Image from "next/image";
import Carousel from "@/components/sample/Carousel";
import ConfirmBtn from "@/components/loading/ConfirmBtn";
import SectionSecond from "@/components/hompage/SectionSecond";
import HomeTab from "@/components/tabcomponent/HomeTab";
import SellerSection from "@/components/hompage/SellerSection";
import StepsCard from "@/components/NFtcards/StepsCard";
import StepsSection from "@/components/hompage/StepsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-2 font-[family-name:var(--font-dm-sans)]">
      <main className="flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full flex items-start justify-between my-10">
          <div className="mr-5 self-center">
            <h2 className="text-[35px] font-semibold mb-3">
              {" "}
              CREATE NFTS{" "}
              <Image
                src={"/assets/greet.jpg"}
                alt="home image"
                width={500}
                height={500}
                className="w-[44px] inline"
              />{" "}
              <br />
              ARTWORKS AND SELL
            </h2>
            <p className="w-[299px]">
              Your ultimate destination for securing, showcasing, and exploring
              the world of premium NFTs. Unlock the future of digital ownership
              today!
            </p>

            <ConfirmBtn
              title={"Get Started"}
              otherStyles={
                "p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[250px] mt-5 text-[16px] font-semibold"
              }
            />
          </div>
          <div className="self-center">
            <Carousel />
          </div>
          {/* site stats */}
          <div></div>
        </div>
        {/* second section */}
        <div className="max-w-4xl w-full flex items-start justify-between my-10">
          <div>
            <SectionSecond />
          </div>
          <div className="mr-5">
            <h3 className="text-[35px] font-semibold mb-3">
              High Quality Assets
            </h3>
            <p className="w-[299px]">
              Discover boundless creativity on EliteNFTVault an exclusive NFT
              platform where visionary artists tokenize their exceptional works.
              <br />
              <br />
              Immerse yourself in a world of digital art, where every
              masterpiece is uniquely crafted on the Ethereum blockchain,
              creating a decentralized gallery of unparalleled beauty and
              innovation.
            </p>

            <ConfirmBtn
              title={"Explore"}
              otherStyles={
                "p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[250px] mt-5 text-[16px] font-semibold"
              }
            />
          </div>
        </div>
        {/* third section */}
        <div className="max-w-4xl w-full flex flex-col items-start justify-between my-10">
          <div className="mx-auto">
            <h3 className="text-[35px] font-semibold mb-3 text-center">
              Our lastest NFT Assets
            </h3>
            <p className="text-center">
              Our latest NFTs collection enables makers with open and safe
              devices. The world fastest growing commercial center for crypto
              collectibles and non-fungible tokens.
            </p>
          </div>
          <div className="mx-auto mt-10">
            <HomeTab />
          </div>
        </div>
        {/* fourth section */}
        <div className="max-w-4xl w-full flex flex-col items-start justify-between my-10">
          <div className="mx-auto">
            <h3 className="text-[35px] font-semibold mb-3 text-center">
              Top Traders
            </h3>
          </div>
          <div className="mx-auto mt-10">
            <SellerSection />
          </div>
        </div>
        {/* Fifth section */}
        <div className="max-w-4xl w-full flex items-start justify-between my-10">
          <div className="mr-5">
            <h3 className="text-[35px] font-semibold mb-3">
              Create and Sell Now
            </h3>
            <p className="w-[299px]">
              Easily create your NFTs, customized solution to assist you make
              you make in meeting it’s goals, make your NFTs availble to the
              marketplace in four easy steps
            </p>

            <ConfirmBtn
              title={"Create"}
              otherStyles={
                "p-3 bg-gradient-to-r from-[#843eff] to-[#fe4ff2] rounded-[10px] w-[250px] mt-5 text-[16px] font-semibold"
              }
            />
          </div>
          <div>
            <StepsSection />
          </div>
        </div>
      </main>
    </div>
  );
}
