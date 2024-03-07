"use client";
import { useState } from "react";
import PriceCard from "@/components/PriceCard";
import coffee from "@/coffee";

const page = () => {
  const [pageNum, setpageNum] = useState(1);
  let productsPerPage = 4;
  let totalPages = 2;
  let lastIndex = pageNum * productsPerPage;
  let firstIndex = lastIndex - productsPerPage;
  function pageCountIncrement() {
    setpageNum(pageNum + 1);
    if (pageNum > totalPages) {
      setpageNum(3);
    }
  }
  function pageCountDecrement() {
    setpageNum(pageNum - 1);
    if (pageNum < 2) {
      setpageNum(1);
    }
  }

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
              {category.flavours.slice(firstIndex, lastIndex).map((flavour) => (
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
      {/* pagination */}
      <div className="flex justify-center">
        <div className="inline-flex gap-6 items-center bg-secondry rounded-md mt-[5em]">
          <div
            onClick={() => pageCountDecrement()}
            className="bg-primary text-secondry px-[8px] py-[3px] rounded-md cursor-pointer"
          >
            Prev
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[20px] text-[.8rem] h-[20px] bg-primary flex justify-center items-center text-secondry rounded-full">
              1
            </div>
            <div className="w-[20px] text-[.8rem] h-[20px] bg-primary flex justify-center items-center text-secondry rounded-full">
              1
            </div>
            <div className="w-[20px] text-[.8rem] h-[20px] bg-primary flex justify-center items-center text-secondry rounded-full">
              1
            </div>
            <div className="w-[20px] text-[.8rem] h-[20px] bg-primary flex justify-center items-center text-secondry rounded-full">
              1
            </div>
            <div className="w-[20px] text-[.8rem] h-[20px] bg-primary flex justify-center items-center text-secondry rounded-full">
              1
            </div>
          </div>
          <div
            className="bg-primary text-secondry px-[8px] py-[3px] rounded-md cursor-pointer"
            onClick={() => pageCountIncrement()}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
