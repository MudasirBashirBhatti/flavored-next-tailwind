"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCoffee } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { mobileNavDiv } from "@/features/navSlice";
import MobileAnchors from "./MobileAnchors";
import Link from "next/link";
import { useState } from "react";

const TopNav = () => {
  let increaseHeight = useSelector((state) => state.navSlice.height);
  let bgColor = useSelector((state) => state.navSlice.background);
  let dispatch = useDispatch();
  return (
    <div
      className={`rounded-[10px] overflow-hidden p-[1em] bg-[rgb(247,247,247)] md:bg-none transition-[3s] ease-in-out`}
      style={{ height: `${increaseHeight}`, background: `${bgColor}` }}
    >
      {/* navigation bar */}
      <nav className="mb-[2em] md:mb-[0em] flex w-[100%] justify-between items-center ">
        <div className="text-primary text-[1.4rem] ">
          <div className="flex gap-2 items-center font-bold">
            Flavored <CgCoffee />
          </div>
          <div className="text-[.8rem]">Wake up to something special.</div>
        </div>
        <ul className="md:flex justify-between items-center w-[500px] list-none text-primary hidden">
          <Link href="/" className="li">
            Home
          </Link>
          <Link href="/coffee-menu" className="li">
            Coffee Menu
          </Link>
          <Link href="/about" className="li">
            About Us
          </Link>
          <Link href="/contact" className="li">
            Contact Us
          </Link>
          <button
            className={`px-[.8em] py-[.46em] text-[.9em] bg-primary text-secondry rounded-full`}
          >
            Coffee Shop
          </button>
        </ul>
        <RxHamburgerMenu
          onClick={() => dispatch(mobileNavDiv())}
          className="block md:hidden text-primary text-[1.6rem] cursor-pointer"
        />
      </nav>
      <div className="flex flex-col gap-5">
        <MobileAnchors link="/" title="Home" />
        <MobileAnchors link="/coffee-menu" title="Coffee Menu" />
        <MobileAnchors link="/about" title="About Us" />
        <MobileAnchors link="/contact" title="Contact Us" />
      </div>
    </div>
  );
};

export default TopNav;
