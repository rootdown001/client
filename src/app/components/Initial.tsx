"use client";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import Link from "next/link";

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
};

const Input = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}: InputProps) => (
  <input
    id={name}
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className=" placeholder:text-white/[.69] my-2 w-full rounded-md p-3 bg-[#184048] text-white border-none text-sm "
  ></input>
);

const sixSectionStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export default function Initial() {
  const { currentAccount, formData, handleChange, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { addressTo, amount, keyword, message } = formData;
    console.log(addressTo, amount, keyword, message);
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className=" flex w-full justify-center items-center">
      <div className=" flex mf:flex-row flex-col items-start  justify-between md:p-20 py-12 px-4">
        <div className=" flex flex-1 justify-start items-center flex-col mf:mr-10">
          {/* TODO: get text to be truely centered */}
          <h1 className="text-3xl sm:text-5xl  text-white px-1 py-1 text-center">
            Send Ethereum Instantly, Securely, and Without Hassle
          </h1>
          <p className=" mt-5 font-normal text-white/[.9] text-center md:w-9/12 w-11/12 text-base">
            Experience the future of digital currency transactions with our
            state-of-the-art Ethereum dapp. Send ETH to anyone, anywhere,
            anytime.
          </p>
          <div className="border-white rounded-lg border-[1px] w-full mt-14 flex flex-col justify-center items-center px-1 py-3">
            <p className="text-white/[.9] py-2 font-semibold text-sm">
              Deployment note
            </p>
            <p className="text-white/[.8] text-center text-sm">
              I currently have this Web 3 app hooked up to the Ethereum
              blockchain Testnet named Sepolia. This means it is{" "}
              <span className=" font-extrabold text-white">free to use</span>.
            </p>
            <p className="text-white/[.8] text-center py-2 text-sm">
              In order to play with it, just add Sepolia Ethereum to your
              Metamask wallet with any of these free Sepolia faucets.
            </p>
            <ul className="text-center py-2 text-sm">
              <li>
                {" "}
                <Link
                  href="https://www.alchemy.com/faucets/ethereum-sepolia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p className="rounded-full px-2 text-[#EE8267] hover:text-[#F19B85] m-1">
                    Alchemy Ethereum Sepolia Faucet
                  </p>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="https://www.infura.io/faucet/sepolia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p className="rounded-full px-2 text-[#EE8267] hover:text-[#F19B85] m-1">
                    Infura Ethereum Sepolia Faucet
                  </p>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p className="rounded-full px-2 text-[#EE8267] hover:text-[#F19B85] m-1">
                    Google Cloud Web 3 Ethereum Sepolia Faucet
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${sixSectionStyles}`}>Safe</div>
            <div className={`${sixSectionStyles}`}>Blockchain</div>
            <div className={`sm:rounded-tr-2xl ${sixSectionStyles}`}>
              Reliable
            </div>
            <div className={`sm:rounded-bl-2xl ${sixSectionStyles}`}>
              Transparent
            </div>
            <div className={` ${sixSectionStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${sixSectionStyles}`}>Fast</div>
          </div> */}
          {/* ethereum card
          <div className=" p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 crypto-card glass-white ">
            <div className=" flex justify-between flex-col w-full h-full">
              <div className=" flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="fff" />
                </div>
                <BsInfoCircle fontSize={17} color="fff" />
              </div>
              <div>
                <p className=" text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className=" text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* second col */}
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/* transaction form */}
          <div className=" p-5 pt-2 sm:w-96 flex flex-col justify-start items-center bg-[#1F545D] rounded-xl min-h-[600px] w-full">
            <div className="flex w-full">
              <div className="flex w-full justify-start items-center py-6 px-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#E6F4F1] flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#E6F4F1" />
                </div>
              </div>
              <div className="flex w-full justify-end py-6">
                <div>
                  <p className="flex text-[#E6F4F1] font-semibold justify-end text-lg px-1">
                    Ethereum
                  </p>
                  <Link
                    href={`https://sepolia.etherscan.io/address/${currentAccount}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <p className="flex text-[#EE8267] font-normal justify-end text-md mt-1">
                      {shortenAddress(currentAccount)}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-2 flex flex-col w-full">
              <form>
                {/* inputs */}
                <div className="text-white">Address To</div>
                <Input
                  placeholder="0x..."
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Amount ETH</div>
                <Input
                  placeholder="0.0"
                  name="amount"
                  type="number"
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Keyword</div>
                <Input
                  placeholder="keyword"
                  name="keyword"
                  type="text"
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Message</div>

                <Input
                  placeholder="Enter message"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />
                {/* line */}
                <div className=" h-[1px] w-full bg-gray-400 my-2" />
                {/* show loader if loading */}
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    // className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                    //
                    className=" flex flex-row justify-center items-center mt-10 bg-[#EE8267] rounded-full cursor-pointer hover:bg-[#F19B85] max-w-[300px] mx-auto px-[80px] py-3 text-white text-xl font-semibold"
                  >
                    Send Now
                  </button>
                )}
              </form>
            </div>
          </div>
          {/* end 2nd column */}
        </div>
      </div>
    </div>
  );
}
