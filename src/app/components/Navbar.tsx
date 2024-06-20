"use client";
import React, { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "/public/rootdowncrypto5.png";
import { TransactionContext } from "../context/TransactionContext";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

type NavItemProps = {
  title: string;
  url: string;
  target: string;
  rel: string;
  internal: boolean;
  classProps?: string;
};

function NavItem({
  title,
  url,
  target,
  rel,
  internal,
  classProps,
}: NavItemProps) {
  return (
    <p className={` mx-4 cursor-pointer ${classProps}`}>
      {" "}
      {internal ? (
        <ScrollLink to={url} smooth={true} duration={500}>
          {title}
        </ScrollLink>
      ) : (
        <Link href={url} target={target} rel={rel}>
          {title}
        </Link>
      )}
    </p>
  );
}

export default function Navbar() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    {
      id: "b155cb45-5d89-4f5f-8d87-4e8324e073bc",
      name: "Market",
      url: "https://www.coingecko.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      internal: false,
    },
    {
      id: "a81d600b-fede-454c-9cb1-d682f073224e",
      name: "Blockchain",
      url: "https://sepolia.etherscan.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      internal: false,
    },
    {
      id: "391f0ab1-5304-477a-82b2-036276f996f8",
      name: "Transactions",
      url: "transactions",
      target: "",
      rel: "",
      internal: true,
    },
  ];

  return (
    <nav className=" w-full flex md:justify-center justify-between items-center p-4 bg-white">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className=" cursor-pointer w-32 " />
      </div>
      <ul className=" text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {links.map((item, index) => (
          <NavItem
            key={item.id}
            title={item.name}
            target={item.target}
            rel={item.rel}
            url={item.url}
            internal={item.internal}
          />
        ))}
        {!currentAccount && (
          <li className="bg-[#EE8267] py-1 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#57CCD7] text-white">
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
            {links.map((item, index) => (
              <NavItem
                key={item.id}
                title={item.name}
                url={item.url}
                target={item.target}
                rel={item.rel}
                internal={item.internal}
                classProps="my-2 text-lg"
              />
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
        )}
      </div>
    </nav>
  );
}
