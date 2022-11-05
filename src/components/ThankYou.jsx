import React from "react";
import iconComplete from "../assets/images/icon-complete.svg";
const ThankYou = () => {
  return (
    <div className="flex flex-col items-center space-y-9 w-full md:max-w-sm mx-5">
      <img src={iconComplete} alt="" />
      <h1 className="font-semibold text-3xl tracking-wider">THANK YOU!</h1>
      <p className="font-semibold tracking-wide text-gray-500 text-xl">
        We've added your card details
      </p>
      <button className="w-full  py-4 bg-[#21092f]  hover:bg-purple-800  rounded-lg text-white font-semibold tracking-wider">
        Continue
      </button>
    </div>
  );
};

export default ThankYou;
