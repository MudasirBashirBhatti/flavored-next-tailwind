"use client";
import React from "react";
import PriceCard from "@/components/PriceCard";
import coffee from "@/coffee";

const page = () => {
  return (
    <div>
      <div className="text-primary text-[2rem] font-bold text-center mt-[1em] sm:text-[2.5rem] lg:text-[3rem]">
        Choose Your Favorite <br className="hidden sm:block" /> Coffee
      </div>
      {coffee.map((category) => (
        <div key={category.id}>
          <h2 className="mt-[2em] text-[1.5rem] text-primary font-bold bg-secondry mb-[.5em] p-[1em] inline-block rounded-[10px] headingShadow">
            {category.category}
          </h2>
          <div className="w-[100%] h-[2px] mb-[7em] bg-primary"></div>
          <ul>
            <div className="flex justify-center items-center flex-wrap w-[100%] gap-x-6 gap-y-32">
              {category.flavours.map((flavour) => (
                <PriceCard
                  key={flavour.sub_id}
                  img="/images/flower.gif"
                  title={flavour.title}
                  description={flavour.description.slice(0, 50)}
                  price={flavour.price}
                />
              ))}
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default page;
