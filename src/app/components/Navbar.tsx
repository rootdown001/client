"use client";
import React, { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "/public/rootdowncrypto5.png";
import { TransactionContext } from "../context/TransactionContext";

type NavItemProps = {
  title: string;
  classProps?: string;
};

function NavItem({ title, classProps }: NavItemProps) {
  return <li className={` mx-4 cursor-pointer ${classProps}`}>{title}</li>;
}

export default function Navbar() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" w-full flex md:justify-center justify-between items-center p-4 bg-white">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className=" cursor-pointer w-32 " />
      </div>
      <ul className=" text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavItem key={item + index} title={item} />
        ))}
        {!currentAccount && (
          <li className="bg-[#1f545d] py-1 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#57CCD7] text-white">
            <button type="button" onClick={connectWallet}>
              {/* TODO: button weight */}
              <p className=" text-white max-w-[120px]">Connect Wallet</p>
            </button>
          </li>
        )}
      </ul>
      {/* mobile view */}
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-[#1f545d] md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenu
            fontSize={28}
            className="text-[#1f545d] md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className=" z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
             flex flex-col justify-start items-end rounded-md glass-blue text-white animate-slide-in"
          >
            <li className=" text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
            {!currentAccount && (
              <li className="bg-[#1f545d] py-1 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#57CCD7] text-white">
                <button type="button" onClick={connectWallet}>
                  {/* TODO: button weight */}
                  <p className=" text-white max-w-[120px]">Connect Wallet</p>
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}
