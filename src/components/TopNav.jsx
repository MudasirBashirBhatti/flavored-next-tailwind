"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCoffee } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { mobileNavDiv } from "@/features/navSlice";

const TopNav = () => {
  let dispatch = useDispatch();
  return (
    <div>
      {/* navigation bar */}
      <nav className="mb-[2em] md:mb-[0em] flex w-[100%] justify-between items-center ">
        <div className="text-primary text-[1.4rem] ">
          <div className="flex gap-2 items-center font-bold">
            Flavored <CgCoffee />
          </div>
          <div className="text-[.8rem]">Wake up to something special.</div>
        </div>
        <ul className="md:flex justify-between items-center w-[500px] list-none text-primary hidden">
          <li>Home</li>
          <li>Coffee Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
    </div>
  );
};

export default TopNav;
