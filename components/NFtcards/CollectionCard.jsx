import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({ data, link }) => {
  return (
    <Link
      href={link || `/marketplace/collection/${data?._id}`}
      className="w-[269px] h-[289px]  flex flex-col  items-center justify-center bg-[#ef8bf7]/50 relative pb-4"
    >
      <Image
        src={data?.banner || "/assets/banner.jpg"}
        alt="banner sample"
        width={"1000"}
        height={"1000"}
        className="w-full h-[150px] mx-auto mb-2 absolute object-cover top-0"
      />
      <div className="z-0">
        <Image
          src={"/assets/profilepic.jpg"}
          alt="collection owner"
          width={"1000"}
          height={"1000"}
          className="w-[150px] h=[150px] rounded-full mx-auto mb-2  object-cover "
        />
        <h3 className="mb-2 font-bold text-center">{`${(data?.name).substring(
          0,
          20
        )}${(data?.name).length > 21 ? "..." : ""}`}</h3>
        <p className="text-[#969494] font-medium text-center"> ERC-20</p>
      </div>
    </Link>
  );
};
export default CollectionCard;
