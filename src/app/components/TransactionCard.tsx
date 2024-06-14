import React from "react";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
                2xl:min-w-[450px]
                2xl:max-w-[500px]
                sm:min-w-[270px]
                sm:max-w-[300px]
                flex-col p-3 rounded-md hover:shadow-2xl
  "
    ></div>
  );
};

export default TransactionCard;
