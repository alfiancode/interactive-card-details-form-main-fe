import React, { useState } from "react";
import bgCardBack from "../assets/images/bg-card-back.png";

const CardBackMobile = () => {
  const [cardYear, setCardYear] = useState("0000");
  return (
    <div className="absolute h-[157px] w-[280px] m-auto left-16 right-0 top-6 md:top-[50%] md:left-[50%] lg:left-[60%]">
      <img src={bgCardBack} alt="" className="bg-cover w-full h-full  " />
      <div className="absolute top-0 w-full h-full items-center flex justify-end ">
        <p className="text-white text-xs font-bold mr-7 "> {cardYear}</p>
      </div>
    </div>
  );
};

export default CardBackMobile;
