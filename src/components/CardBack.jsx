import React, { useState } from "react";
import bgCardBack from "../assets/images/bg-card-back.png";

const CardBack = () => {
  const [cardYear, setCardYear] = useState("0000");

  return (
    <div>
      <div className="absolute h-[157px] w-[280px] m-auto left-32 right-0 top-6 hidden hidden">
        <img src={bgCardBack} alt="" className="bg-cover w-full h-full  " />
        <div className="absolute top-0 w-full h-full items-center flex justify-end ">
          <p className="text-white text-xs font-bold mr-7 "> {cardYear}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
