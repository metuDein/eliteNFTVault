import Image from "next/image";

const SellerCard = ({ data, index }) => {
  return (
    <div className="flex items-start justify-center">
      <p> {index + 1}. </p>
      <div className="mx-5">
        <Image
          src={data?.image || "/assets/profilepic.jpg"}
          alt="top sellers"
          width={500}
          height={500}
          className="rounded-[8px] object-cover w-[86px] h-[84px] "
        />
      </div>
      <div className="flex flex-col self-center">
        <p className="text-[#ff4ff3] font-semibold text-[20px]">
          {`${(data?.name).substring(0, 11)}${
            (data?.name).length > 12 ? "..." : ""
          }`}{" "}
        </p>
        <p className="text-white text-[12px]"> {data?.balance} ETH</p>
      </div>
    </div>
  );
};
export default SellerCard;
