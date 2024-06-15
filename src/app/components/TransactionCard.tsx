import React from "react";
import { shortenAddressShort } from "../utils/shortenAddress";

type TransactionCardProps = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
  index: number;
};

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
  index,
}: TransactionCardProps) => {
  return (
    <div
      className="bg-white m-4 flex flex-1
                2xl:min-w-[450px]
                2xl:max-w-[500px]
                sm:min-w-[270px]
                sm:max-w-[300px]
                flex-col p-3 rounded-xl hover:shadow-lg  border-2 border-slate-400
  "
      //     className="bg-[#181918] m-4 flex flex-1
      //               2xl:min-w-[450px]
      //               2xl:max-w-[500px]
      //               sm:min-w-[270px]
      //               sm:max-w-[300px]
      //               flex-col p-3 rounded-md hover:shadow-2xl
      // "
    >
      <div className="font-medium">{`Transaction ${index + 1}`}</div>
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 px-4 pt-2">
          <a
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[#0E2126] text-base">
              From: {shortenAddressShort(addressFrom)}
            </p>
          </a>
          <a
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[#0E2126] text-base">
              To: {shortenAddressShort(addressTo)}
            </p>
          </a>
          <p className="text-[#0E2126] text-base">Amount: {amount} ETH</p>
          {keyword && (
            <>
              <br />
              <p className="text-[#0E2126] text-base">Keyword: {keyword}</p>
            </>
          )}
          {message && (
            <>
              <br />
              <p className="text-[#0E2126] text-base">Message: {message}</p>
            </>
          )}
          <div className="flex justify-center">
            {" "}
            <div className=" border-slate-500 border-solid border-[1px] p-3 px-5 w-max rounded-2xl mt-5 shadow-lg">
              <p className=" text-slate-500 font-bold">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
