import React from "react";

const Input = ({ id, placeholder, size , more }) => {
  return (
    <input
      type="text"
      id={id}
      className={`tajawal-medium text-[${size}px] bg-[#E9E9E9] text-[#A6A6A6] placeholder:text-[#A6A6A6] text-sm block w-full p-4 rounded-[10px] ${more}`}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
