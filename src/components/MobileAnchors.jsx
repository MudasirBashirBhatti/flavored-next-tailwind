import React from "react";
import Link from "next/link";

const MobileAnchors = (props) => {
  return (
    <Link
      href={props.link}
      className="w-[100%] bg-primary text-secondry rounded-[10px] p-[1em] md:hidden"
    >
      {props.title}
    </Link>
  );
};

export default MobileAnchors;
