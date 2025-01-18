"use client";
import { useDataContext } from "@/components/context/DataProvider";
import ProfileTabs from "@/components/tabcomponent/ProfileTabs";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import ConfirmBtn from "@/components/loading/ConfirmBtn";
import Loading from "@/components/loading/Loading";

const User = () => {
  const { appData, user } = useDataContext();
  const username = user?.username;

  const { assets, collections } = appData;
  const myAssets = assets.filter(
    (item, i) => item?.owner?.username === username
  );

  const myCollections = collections.filter(
    (item) => item?.owner?.username === username
  );

  console.log(myCollections.length);

  if (!appData || !user) return <Loading otherStyles={"mx-auto"} />;

  return (
    <div className="w-full min-h-screen  flex items-center">
      <div className="w-full min-h-screen relative flex items-center">
        <div className="absolute top-0 left-0 w-full h-96">
          <Image
            src={"/assets/banner.jpg"}
            alt="banner"
            width={3500}
            height={3500}
            className="w-full h-96"
          />
        </div>
        <div className="w-full h-40 mx-auto bg-[#281549] z-30 flex  -mt-20">
          <div className="-mt-16 w-[320px]  min-h-40 p-2 flex flex-col justify-between items-center">
            <Image
              src={"/assets/profilepic.jpg"}
              alt="profile pic"
              width={"1000"}
              height={"1000"}
              className="w-[188px] h-[188px] rounded-full my-2"
            />
            <h3>{username}</h3>
            <p>
              <FontAwesomeIcon icon={faEthereum} className="text-[#141414]" />{" "}
              <span>0x523...t5542</span>{" "}
            </p>
            <p className="my-2 p-1 text-center">
              {" "}
              welcome to my hub get your nft account ready to
            </p>

            <ConfirmBtn
              otherStyles={"mb-2 bg-[#ff4ff3]/50 p-3"}
              title={"edit profile"}
            />
          </div>
          <ProfileTabs
            otherStyles={""}
            assets={myAssets}
            collections={myCollections}
          />
        </div>
      </div>
    </div>
  );
};
export default User;
