"use client";
import ImageUpload from "@/components/imageupload/ImageUpload";
import InputFields from "@/components/form/InputFields";
import AuthBtn from "@/components/form/AuthBtn";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/Loading";
import CollectionDropdown from "@/components/dropdown/CollectionDropdown";
import CollectionFeeDetails from "@/components/paymentdetails/CollectionFeeDetails";
import { toast } from "react-toastify";
import { useDataContext } from "@/components/context/DataProvider";

const page = () => {
  const { user } = useDataContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [blockChain, setBlockChain] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  async function submitCreate(e) {
    e.preventDefault();
    console.log(name, blockChain, image.substring(0, 10));
    if (!name || !blockChain || !image || !userId) {
      toast.error("All fields required");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/mediaupload", {
        method: "POST",
        body: JSON.stringify({
          image,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
        return;
      }

      if (response.ok) {
        const imageData = await response.json();
        const res = await fetch("/api/collection", {
          method: "POST",
          body: JSON.stringify({
            name,
            blockChain,
            uId: userId,
            image_public_id: imageData.uid,
            image_url: imageData.imageURL,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          toast.error(errorData.message);
        }
        if (res.ok) {
          toast.success("Collection created");
        }
      }
    } catch (error) {
      console.log(error.name, error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      setUserId(user?._id);
    }
  }, [user]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold text-[#ffffff] mb-3">
        Create a collection
      </h2>
      <div className="sm:w-[1184px] h-[532px] rounded-[10px]  flex space-x-5 justify-center items-start relative">
        {loading && (
          <Loading
            otherStyles={"absolute mx-auto z-30  bg-[#582b71]/50 top-2"}
          />
        )}
        <div>
          <ImageUpload
            image={image}
            setImage={setImage}
            title={`Pick a banner for your collection
(pick a banner with a ratio of 1500 X 300, max size: 10 MB)`}
            otherStyles={""}
          />
        </div>
        <div className="h-[400px] w-[1px] border border-[#ff4ff3] border-solid self-center" />
        <form onSubmit={submitCreate}>
          <p className="text-xl font-semibold">
            Provide details for your collection
          </p>
          <InputFields
            label={"Name"}
            value={name}
            handleChange={(e) => setName(e.target.value)}
            placeholder={"pick a unique name for your collection"}
            otherStyles={"mb-2"}
          />
          <CollectionDropdown
            blockChain={blockChain}
            setBlockChain={setBlockChain}
            otherStyles={"mb-2"}
          />
          <CollectionFeeDetails name={name} otherStyles={"my-2 mx-auto"} />
          <AuthBtn
            title={"Create"}
            otherStyles={"p-4 bg-[#ff4ff3] ml-3"}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};
export default page;
