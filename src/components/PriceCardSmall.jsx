import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";

const PriceCard = (props) => {
  return (
    <div className="bg-secondry w-[250px] h-[250px] p-[1.4em] rounded-[40px] relative backdrop-blur-[50px] bg-secondry/40">
      <img
        className="absolute left-[50%] translate-x-[-50%] w-[70%] top-[-88px]"
        src={props.img}
        alt=""
      />
      <div className="text-primary mt-[40%] mb-[.5em]">
        <div className="font-bold">{props.title}</div>
        <div className="text-[12px] pt-2">{props.description}</div>
      </div>
      {/* cart and heart icons */}
      <div className="flex items-center gap-5 justify-center w-[100%]">
        <CgShoppingCart className="w-[30px] h-[30px] p-[6px] bg-secondry rounded-[10px] text-primary" />
        <IoIosHeartEmpty className="w-[30px] h-[30px] p-[6px] bg-secondry rounded-[10px] text-primary" />
      </div>

      <button
        className={`px-[1em] py-[.3em] text-[.9em] bg-primary text-secondry rounded-[10px] btnShadow absolute bottom-[-15px] left-[50%] translate-x-[-50%]`}
      >
        {props.price}
      </button>
    </div>
  );
};

export default PriceCard;
