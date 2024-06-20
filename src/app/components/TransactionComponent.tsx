"use client";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { dummyData } from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import TransactionCard from "./TransactionCard";

export default function TransactionComponent() {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div
      id="transactions"
      className="scroll-mt-0.5 flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions h-auto rounded-3xl -mt-5 z-1"
    >
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
          {transactions.reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
