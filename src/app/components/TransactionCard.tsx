import React from "react";
import { shortenAddress } from "../utils/shortenAddress";
import Link from "next/link";

type TransactionCardProps = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  // url: string;
  // index: number;
};

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
}: // url,
// index,
TransactionCardProps) => {
  return (
    <div
      className=" bg-white m-4 flex flex-1
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    flex-col p-3 rounded-xl shadow-lg  
"

      //     className=" bg-[#1F545D] m-4 flex flex-1
      //               2xl:min-w-[450px]
      //               2xl:max-w-[500px]
      //               sm:min-w-[270px]
      //               sm:max-w-[300px]
      //               flex-col p-3 rounded-xl hover:shadow-lg  border-2
      // "
    >
      {/* <div className=" font-semibold text-black">{`Transaction ${
        index + 1
      }`}</div> */}
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 px-1 pt-2">
          <Link
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center rounded-md bg-white mt-2">
              <p className="text-black text-sm  ">From: </p>
              <p className="rounded-full text-sm text-[#EE8267] hover:text-[#F19B85]">
                {shortenAddress(addressFrom)}
              </p>
            </div>
          </Link>
          <Link
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center rounded-md bg-white mt-2">
              <p className="text-black text-sm  ">To: </p>
              <p className="rounded-full text-sm text-[#EE8267] hover:text-[#F19B85]">
                {shortenAddress(addressTo)}
              </p>
            </div>
          </Link>

          <div className="flex justify-between items-center rounded-md bg-white mt-2 ">
            <p className="text-black text-sm">Amount: </p>
            <p className="text-black text-sm pl-4">{amount} ETH</p>
          </div>

          {keyword && (
            <div className="flex justify-between items-center rounded-md bg-white mt-2 ">
              <p className="text-black text-sm">Keyword: </p>
              <p className="text-black text-sm pl-4">{keyword}</p>
            </div>
          )}

          {message && (
            <div className="flex justify-between items-center rounded-md bg-white mt-2 ">
              <p className="text-black text-sm">Message: </p>
              <p className="text-black text-sm pl-4">{message}</p>
            </div>
          )}

          <div className="flex justify-center">
            {" "}
            <div className=" border-slate-500 border-solid border-[1px] p-2 px-4 w-max rounded-2xl mt-5 shadow-lg bg-white">
              <p className=" text-slate-500 font-bold text-sm">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
