import React from "react";

const Button = (prop) => {
  return (
    <button
      className={`px-[.8em] py-[.3em] text-[.9em] bg-primary text-secondry rounded-full`}
    >
      {prop.btnTitle}
    </button>
  );
};

export default Button;
