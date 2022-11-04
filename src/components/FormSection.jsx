import React from "react";

const FormSection = () => {
  return (
    <div className="flex justify-center h-screen w-full flex-1 items-center md:pl-24 mt-20 md:mt-0  ">
      {/* form for cardholder  */}
      <form className="space-y-2 max-w-sm mx-5">
        <div className="">
          <label className=" text-sm font-semibold mb-2">Cardholder Name</label>
          <input
            type="text"
            className="w-full ring-1 ring-gray-500  p-2 rounded-lg mb-4 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div className="">
          <label className=" text-sm font-semibold mb-2">Card Number</label>
          <input
            type="text"
            className="w-full border-[1px] border-gray-200 p-2 rounded-lg mb-4"
            placeholder="John Doe"
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-sm font-semibold mb-2">
            Expiration Date
          </label>
          {/* expiration date */}
          <div className="flex ">
            <div className="w-1/2 space-x-5 ">
              <input
                type="text"
                className="w-[40%] border-[1px] border-gray-200 p-2 rounded-lg  "
                placeholder="MM"
              />
              <input
                type="text"
                className="w-[40%] border-[1px] border-gray-200 p-2 rounded-lg "
                placeholder="YY"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                className="w-full border-[1px] border-gray-200 p-2 rounded-lg "
                placeholder="CVV"
              />
            </div>
          </div>
          {/* button confirm */}
          <div className="flex  mt-8">
            <button className="bg-[#21092f] text-white p-2 rounded-lg w-full  hover:bg-purple-800 ">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
