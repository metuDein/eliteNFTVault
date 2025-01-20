const MessageCard = () => {
  return (
    <div className="w-[300px] p-2  flex flex-col place-self-start">
      <h3 className="text-xl font-semibold text-[#ff4ff3] text-left">
        {" "}
        You made a sale!!!{" "}
      </h3>
      <p className="text-[14px] text-left">
        {" "}
        the proceeds from your sales... {"    "} <span> 1/23/2025 4:39pm </span>
      </p>
    </div>
  );
};
export default MessageCard;
