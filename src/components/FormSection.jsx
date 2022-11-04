import React from "react";

const FormSection = () => {
  return (
    <div className="flex justify-center h-screen w-full flex-1 items-center md:pl-24">
      {/* form for cardholder  */}
      <form className="space-y-2">
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
      </form>
    </div>
  );
};

export default FormSection;
