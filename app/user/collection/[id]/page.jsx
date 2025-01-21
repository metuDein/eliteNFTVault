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
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { useAppKit } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = (props) => {
  const router = useRouter();
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAccount();
  const { data: hash, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const params = use(props.params);
  const { appData, user } = useDataContext();
  const { assets, collections } = appData;

  const [collAssets, setCollAssets] = useState(null);

  const [resolvedParams, setResolvedParams] = useState(null);
  const [collection, setCollection] = useState(null);
  const [totalValue, setTotalValue] = useState(0);
  const [totalLike, setTotalLikes] = useState(0);
  const [totalViews, setTotalLikesViews] = useState(0);

  const appaddress = process.env.BROKER_WALLET;
  async function payGasfee() {
    try {
      if (!address) {
        open();
      }
      sendTransaction({
        to: "0x9247ebcd3cce95918b344b07d3a1b02884158e69",
        value: parseEther("0.0004"),
      });
      if (isConfirmed) {
        toast.success("payment successful");
      }
      console.log(hash);
    } catch (error) {
      console.log(error.name, ": ", error.message);
    }
  }

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

      const totalValue = [...collectionAssets].reduce(
        (acc, item) => acc + item?.price,
        0
      );
      const totallikes = [...collectionAssets].reduce(
        (acc, item) => acc + item?.likes,
        0
      );

      setTotalValue(totalValue);
      setTotalLikes(totallikes);
    }
  }, [resolvedParams, collections]);

  if (!resolvedParams || !collection)
    return <Loading otherStyles={"mx-auto"} />;
  return (
    <div className="w-full min-h-screen p-3 pt-[75px] pb-6">
      <div className="w-full p-2 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-start justify-between">
          <Image
            src={collection?.banner || "/assets/banner.jpg"}
            alt="collection image"
            width={1000}
            height={1000}
            className="rounded-[10px] w-[183px] h-[150px] sm:w-[283px] sm:h-[258px] object-contain mr-2 sm:mr-0"
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
          <div className="bg-white  border-l-8 border-0 border-[#cb4747] w-[300px]  sm:w-[357px] py-3 flex flex-col justify-around relative">
            {isPending && <Loading otherStyles={"absolute"} />}
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
              handleClicked={payGasfee}
            />
          </div>
        )}
      </div>

      <div className="w-full px-2 sm:px-20 mx-auto my-3 flex items-center justify-center gap-1 sm:gap-40">
        <div className="flex flex-col">
          <p className="text-[#969494] items-center">Views</p>
          <p className="font-bold text-2xl text-white"> 140 </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#969494]">Value</p>
          <p className="font-bold text-2xl text-white">
            {" "}
            <FontAwesomeIcon icon={faEthereum} className="ml-1" />
            {totalValue}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#969494]">Favourite</p>
          <p className="font-bold text-2xl text-white"> {totalLike} </p>
        </div>
      </div>
      <div className="w-full p-3 grid grid-cols-1 sm:grid-cols-3 gap-8  justify-items-center">
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
        {user?.balance > 0 && (
          <ConfirmBtn
            title={"Withdraw"}
            otherStyles={"bg-green-600 p-4 w-[300px]"}
          />
        )}
        <ConfirmBtn
          title={"Add Asset"}
          otherStyles={"bg-[#ff4ff3] p-4 w-[300px]"}
          handleClicked={() =>
            router.push(`/user/createAsset?collectionId=${collection._id}`)
          }
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
