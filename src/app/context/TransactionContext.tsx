"use client";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

type ContextProps = {
  connectWallet: any;
  currentAccount: string;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction: () => Promise<void>;
};

import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext<ContextProps>({
  connectWallet: () => {},
  currentAccount: "",
  formData: {
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  },
  handleChange: () => {},
  sendTransaction: () => Promise.resolve(),
});

const ethereum = typeof window !== "undefined" ? window.ethereum : undefined;

const getEthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  // console.log({ contractAddress, contractABI, signer });

  return transactionContract;
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setcurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("transactionCount")
      : ""
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask wallet.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setcurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log("No accounts found.");
      }

      console.log("🚀 ~ checkIfWalletIsConnected ~ accounts:", accounts);
    } catch (error) {
      console.log("🚀 ~ checkIfWalletIsConnected ~ error:", error);

      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask wallet.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setcurrentAccount(accounts[0]);
    } catch (error) {
      console.log("🚀 ~ connectWal ~ error:", error);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask wallet.");

      const { addressTo, amount, keyword, message } = formData;

      const transactionContract = await getEthereumContract();

      //  convert amount to GWEI hexidec
      const parsedAmount = ethers.utils.parseEther(amount);

      console.log("🚀 ~ sendTransaction ~ parsedAmount:", parsedAmount);
      console.log("amount: ", amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", //21000 GWEI
            value: parsedAmount._hex,
          },
        ],
      });

      console.log(transactionContract);

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCountBlockchain =
        await transactionContract.getTransactionCount();

      setTransactionCount(transactionCountBlockchain.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
