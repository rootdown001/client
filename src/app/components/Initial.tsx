"use client";
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import Link from "next/link";
import { initialFormData } from "../context/TransactionContext";

// for new icons
import { FaFaucet } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string | number;
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
  const {
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { addressTo, amount, keyword, message } = formData;
    // console.log(addressTo, amount, keyword, message);
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    // console.log("fd before send ", formData);
    await sendTransaction();

    // console.log("fd after send ", formData);
    setFormData(initialFormData);
    // console.log("fd after update form ", formData);
  };

  return (
    <div className=" flex w-full justify-center items-center">
      <div className=" flex mf:flex-row flex-col items-start  justify-between md:p-14 py-8 px-4">
        <div className=" flex flex-1 justify-start items-center flex-col mf:mr-10 pt-12">
          {/* TODO: get text to be truely centered */}
          <h1 className="text-3xl sm:text-5xl  text-white px-1 py-1 text-center">
            Send Ethereum Instantly, Securely, and Without Hassle
          </h1>
          <p className=" mt-5 font-normal text-white/[.9] text-center md:w-9/12 w-11/12 text-base">
            Experience the future of digital currency transactions with our
            state-of-the-art Ethereum dapp. Send ETH to anyone, anywhere,
            anytime.
          </p>
          <div className=" mf:mt-28 mt-10 flex flex-col justify-start items-center w-[300px] mf:w-[60%] border-[1px] rounded-xl border-white/[.4]">
            <div className=" flex flex-row w-full">
              <div className="basis-1/6 flex justify-center items-start">
                <div className="w-8 h-8 p-2 pt-4">
                  <FaFaucet fontSize={18} color="#E6F4F1" />
                </div>
              </div>

              <div className="basis-5/6 flex flex-col justify-start items-start">
                <p className="text-white/[.8] flex w-full justify-start items-center pt-4 pb-2 px-2 text-sm">
                  Faucets for free Sepolia ETH
                </p>
                <ul className="text-sm mb-2">
                  <li>
                    <Link
                      href="https://www.alchemy.com/faucets/ethereum-sepolia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="rounded-full px-7 text-[#EE8267] hover:text-[#F19B85] ">
                        Alchemy Faucet
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
                      <p className="rounded-full  px-7 text-[#EE8267] hover:text-[#F19B85]">
                        Infura Faucet
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
                      <p className="rounded-full pb-2 px-7 text-[#EE8267] hover:text-[#F19B85]">
                        Google Cloud Faucet
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* second col */}
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 mf:mb-3 mb-3">
          {/* transaction form */}
          <div className=" pl-5 pr-5 pb-1 pt-2 sm:w-96 flex flex-col justify-start items-center bg-[#1F545D] rounded-xl min-h-[600px] w-full">
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
                  value={formData.addressTo}
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Amount ETH</div>
                <Input
                  placeholder="0.0"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Keyword</div>
                <Input
                  placeholder="keyword"
                  name="keyword"
                  type="text"
                  value={formData.keyword}
                  handleChange={handleChange}
                />
                <div className="text-white mt-1">Message</div>

                <Input
                  placeholder="Enter message"
                  name="message"
                  type="text"
                  value={formData.message}
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
                    className=" flex flex-row justify-center items-center mt-6 bg-[#EE8267] rounded-full cursor-pointer hover:bg-[#F19B85] max-w-[300px] mx-auto px-[80px] py-3 text-white text-xl font-semibold"
                  >
                    Send Now
                  </button>
                )}
              </form>
            </div>
            <div className="flex mt-6 w-[90%]">
              <div className="basis-1/5 flex justify-end items-start">
                <div className="w-8 h-8 flex justify-center items-center">
                  <FaRocket fontSize={18} color="#E6F4F1" />
                </div>
              </div>

              <div className="basis-4/5 flex justify-start items-center pl-2">
                <p className="text-white/[.8] flex w-full justify-start items-center text-sm">
                  Deployed to Ethereum Testnet{" "}
                </p>
              </div>
            </div>
          </div>
          {/* end 2nd column */}
        </div>
      </div>
    </div>
  );
}
