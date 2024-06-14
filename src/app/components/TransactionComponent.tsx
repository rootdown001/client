"use client";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { dummyData } from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import TransactionCard from "./TransactionCard";

export default function TransactionComponent() {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-white rounded-3xl -my-5">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-[#0E2026] text-3xl font-medium text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-[#0E2026] text-3xl font-medium text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
