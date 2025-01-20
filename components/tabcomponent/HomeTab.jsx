"use client";

import { useEffect, useState } from "react";
import ShoppingCard from "../NFtcards/ShoppingCard";
import CollectionCard from "../NFtcards/CollectionCard";
import MessageCard from "../message/MessageCard";
import { useDataContext } from "../context/DataProvider";
import Loading from "../loading/Loading";
import HomeTabCards from "../NFtcards/HomeTabCards";
import SecondCarousel from "../sample/SecondCarousel";

const HomeTab = ({ otherStyles }) => {
  const { appData } = useDataContext();
  const { assets } = appData;
  const [activeTab, setActiveTab] = useState(0);

  const [fiveItems, setFiveItems] = useState([]);

  function handleTabClicked(index) {
    setActiveTab(index);
  }

  useEffect(() => {
    if (assets) {
      const lastFiveItems = [...assets].slice(-5);
      setFiveItems(lastFiveItems);
    }
  }, [appData]);

  if (!assets) return <Loading otherStyles={"mx-auto"} />;

  return (
    <div className={`w-full sm:p-3 ${otherStyles}`}>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center justify-center flex-1 space-x-1">
            <button
              className={`${
                activeTab === 0 ? "bg-[#ef8bf7]" : "bg-transparent"
              }  border-solid border-[2px] border-[#ef7bf7] rounded-[10px] px-3 py-2 text-white`}
              onClick={() => handleTabClicked(0)}
            >
              {" "}
              assets
            </button>
            <button
              className={`${
                activeTab === 1 ? "bg-[#ef8bf7]" : "bg-transparent"
              }  border-solid border-[2px] border-[#ef7bf7] rounded-[10px] px-3 py-2 text-white`}
              onClick={() => handleTabClicked(1)}
            >
              {" "}
              Collections
            </button>
            <button
              className={`${
                activeTab === 2 ? "bg-[#ef8bf7]" : "bg-transparent"
              }  border-solid border-[2px] border-[#ef7bf7] rounded-[10px] px-3 py-2 text-white text-nowrap sm:flex hidden`}
              onClick={() => handleTabClicked(2)}
            >
              {" "}
              On sale
            </button>
            <button
              className={`${
                activeTab === 3 ? "bg-[#ef8bf7]" : "bg-transparent"
              }  border-solid border-[2px] border-[#ef7bf7] rounded-[10px] px-3 py-2 text-white`}
              onClick={() => handleTabClicked(3)}
            >
              {" "}
              Activity
            </button>
          </div>
        </div>
        {/* ProfileTabs display */}
        <div className="w-full p-6 min-h-[500px] mt-5 flex gap-3 items-center  justify-center">
          {activeTab === 0 && <SecondCarousel data={assets} />}
        </div>
      </div>
    </div>
  );
};
export default HomeTab;
