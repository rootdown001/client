import React from "react";
import { shortenAddressShort } from "../utils/shortenAddress";
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
        <div className="w-full mb-6 px-4 pt-2">
          <Link
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center rounded-md bg-white p-1 mt-2">
              <p className="text-black text-base  ">From: </p>
              <p className="rounded-full px-2 text-[#EE8267] hover:text-[#F19B85] m-1">
                {shortenAddressShort(addressFrom)}
              </p>
            </div>
          </Link>
          <Link
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center rounded-md bg-white p-1 mt-2">
              <p className="text-black text-base  ">To: </p>
              <p className="rounded-full  px-2 text-[#EE8267] hover:text-[#F19B85] m-1">
                {shortenAddressShort(addressTo)}
              </p>
            </div>
          </Link>

          <div className="flex justify-between items-center rounded-md bg-white p-2 mt-2 ">
            <p className="text-black text-base">Amount: </p>
            <p className="text-black text-base">{amount} ETH</p>
          </div>

          {keyword && (
            <div className="flex justify-between items-center rounded-md bg-white p-2 mt-2 ">
              <p className="text-black text-base">Keyword: </p>
              <p className="text-black text-base">{keyword} ETH</p>
            </div>
          )}

          {message && (
            <div className="flex justify-between items-center rounded-md bg-white p-2 mt-2 ">
              <p className="text-black text-base">Message: </p>
              <p className="text-black text-base">{message} ETH</p>
            </div>
          )}

          <div className="flex justify-center">
            {" "}
            <div className=" border-slate-500 border-solid border-[1px] p-2 px-4 w-max rounded-2xl mt-5 shadow-lg bg-white">
              <p className=" text-slate-500 font-bold">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
