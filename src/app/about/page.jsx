"use client";
import { useState } from "react";

const page = () => {
  const [image, setimage] = useState(0);
  function imageShow() {
    setimage(1);
  }
  return (
    <div className="relative">
      <div>Flavored App</div>
      <div>
        <div>Technologies:</div>
        <ul>
          <li>Next.js</li>
          <li>Tailwind CSS (For Styling)</li>
          <li>Redux Toolkit (For State Management)</li>
        </ul>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam
        expedita iste tenetur eaque animi illo distinctio iure placeat
        dignissimos, nobis voluptatum odit porro nam nesciunt rem ullam aliquam
        quo?
      </div>

      <div className="relative">
        <div className="h-[300px] overflow-hidden rounded-lg">
          <img src="/images/coffee.png" alt="" onClick={() => imageShow()} />
        </div>
        <div className="w-[400px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <img
            src="/images/coffee.png"
            className={`w-[100%] scale-${image}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
