"use client";

declare global {
  interface Window {
    ethereum: any;
  }
}

import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext({});

// const { ethereum } = window;

let ethereum: ethers.Eip1193Provider;
if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}

const getEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setcurrentAccount] = useState("");

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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
