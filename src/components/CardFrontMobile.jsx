import React, { useState } from "react";
import bgCardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";
const CardFrontMobile = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("CARDHOLDER");
  const [cardDate, setCardDate] = useState("MM/YY");
  return (
    <div className="absolute h-[157px] w-[280px] m-auto left-0 right-20 top-32 md:top-[22%] md:left-[30%]">
      <img src={bgCardFront} alt="" className="bg-cover w-full h-full  " />
      <p className="absolute top-0 w-full h-full">
        <div className="mx-5 my-3 flex flex-col">
          <div className=" mt-2 ">
            <img src={cardLogo} alt="" className="w-[52px]" />
          </div>
          <div className="flex mt-8">
            <p className="tracking-[3px] text-white text-lg">{cardNumber}</p>
          </div>
          <div className="flex justify-between text-white text-[10px] mt-3 ">
            <p>{cardName}</p>
            <p>{cardDate}</p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default CardFrontMobile;
