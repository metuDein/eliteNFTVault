"use client";
import Image from "next/image";
import { useDataContext } from "@/components/context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import ConfirmBtn from "@/components/loading/ConfirmBtn";
import ShoppingCard from "@/components/NFtcards/ShoppingCard";
import { useState, useEffect, use } from "react";
import Loading from "@/components/loading/Loading";

const page = props => {
  const params = use(props.params);
  const { appData, user } = useDataContext();
  const { assets, collections } = appData;

  const [collAssets, setCollAssets] = useState(null);

  const [resolvedParams, setResolvedParams] = useState(null);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setResolvedParams(unwrappedParams);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams && assets.length) {
      const currentCollection = collections.find(
        (item) => item._id === resolvedParams.id
      );
      const collectionAssets = assets.filter(
        (item) => item?.collectionName?.name === currentCollection?.name
      );
      setCollection(currentCollection);
      setCollAssets(collectionAssets);
    }
  }, [resolvedParams, collections]);

  if (!resolvedParams || !collection)
    return <Loading otherStyles={"mx-auto"} />;
  return (
    <div className="w-full min-h-screen p-3">
      <div className="w-full p-2 flex items-center justify-between">
        <div className="flex items-start justify-between">
          <Image
            src={collection?.banner || "/assets/banner.jpg"}
            alt="collection image"
            width={1000}
            height={1000}
            className="rounded-[10px] w-[283px] h-[258px] object-contain"
          />

          <div className="flex flex-col self-center">
            <p className="text-xl font-bold text-[#FF4ff3] my-2">
              {collection.name}{" "}
            </p>
            <p className="text-xl font-medium text-[#ffffff] my-2">
              7 ETH
              <FontAwesomeIcon
                icon={faEthereum}
                className="text-[#000] text-xl ml-2"
              />{" "}
            </p>
            <p className="text-sm font-medium text-[#ffffff] my-2">
              Total assets : {collAssets.length}
            </p>
          </div>
        </div>
        {collection?.gasFee === "unpaid" && (
          <div className="bg-white  border-l-8 border-0 border-[#cb4747]  w-[357px] py-3 flex flex-col justify-around">
            <h3 className="font-bold text-[#cb4747] pl-3">
              <FontAwesomeIcon icon={faTriangleExclamation} /> warning
            </h3>
            <p className="text-center text-black">
              The gas fee of this collection has not been paid.
            </p>
            <div className="w-[99%] border border-[#cb4747]" />
            <p className="text-black font-semibold w-full px-2">
              Estimated:{" "}
              <span className="float-right">
                {collection?.gasFeeAmount} ETH{" "}
                <FontAwesomeIcon icon={faEthereum} />
              </span>
            </p>
            <ConfirmBtn
              title={"Pay now"}
              otherStyles={"bg-[#cb4747] p-3 mx-auto"}
            />
          </div>
        )}
      </div>

      <div className="w-full px-20 mx-auto my-3 flex items-center justify-center gap-40">
        <div className="flex flex-col">
          <p className="text-[#969494] items-center">Views</p>
          <p className="font-bold text-2xl text-white"> 140 </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#969494]">earnings</p>
          <p className="font-bold text-2xl text-white"> $ 140000 </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#969494]">Favourite</p>
          <p className="font-bold text-2xl text-white"> 140 </p>
        </div>
      </div>
      <div className="w-full p-3 grid grid-cols-3 gap-8  justify-items-center">
        {collAssets &&
          collAssets.map((item, index) => (
            <ShoppingCard key={item?._id} data={item} />
          ))}
        {collAssets.length === 0 && (
          <p className="text-white font-bold text-xl text-center">
            {" "}
            No Assets found{" "}
          </p>
        )}
        <ConfirmBtn
          title={"Add Asset"}
          otherStyles={"bg-[#ff4ff3] p-4 w-[300px]"}
        />
        <ConfirmBtn
          title={"Delete collection"}
          otherStyles={"bg-[#cb4747] p-4 w-[300px]"}
        />
      </div>
    </div>
  );
};
export default page;
