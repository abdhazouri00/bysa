import React from "react";

const Input = ({ id, placeholder, size, more, value, onChange , required }) => {
  return (
    <input
      type="text"
      id={id}
      className={`tajawal-medium text-[${size}px] border-0 bg-[#E9E9E9] text-black placeholder:text-[#A6A6A6] text-sm block w-full p-4 rounded-[10px] ${more}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required = {required}
    />
  );
};

export default Input;
