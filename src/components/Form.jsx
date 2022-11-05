import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
const Form = () => {
  // schema yup for validation with react-hook-form and resolver
  const schema = yup.object().shape({
    CardholderName: yup.string().required("Name is required"),
    CardNumber: yup
      .number("tes")
      .required("Card Number is required")
      .typeError("Card Number is required"),
    ExpirationDateMM: yup
      .number()
      .required("Month Date is required")
      .typeError("Month Date is required")
      .min(1, "must be at least 1")
      .max(12, "must be at most 12"),
    ExpirationDateYY: yup
      .number("should be number")
      .typeError("Year Date is required")
      .required("Year Date is required")
      .min(1999, "must be at least 1999")
      .max(2099, "must be at most 2099"),
    CVV: yup
      .number("should be number")
      .required("CVV is required")
      .typeError("Expiration Date is required"),
  });
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    reset();
    console.log(data);
    navigate("/thankyou");
  };
  return (
    <form className="space-y-2 max-w-md mx-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label className=" text-sm font-semibold mb-2">Cardholder Name</label>
        <input
          type="text"
          className="w-full ring-1 ring-gray-500  p-2 rounded-lg  focus:ring-blue-500"
          placeholder="John Doe"
          {...register("CardholderName")}
        />
        <p className="text-red-500"> {errors?.CardholderName?.message} </p>
      </div>
      <div className="">
        <label className=" text-sm font-semibold mb-2">Card Number</label>
        <InputMask
          mask={"9999 9999 9999 9999"}
          alwaysShowMask={false}
          maskPlaceholder=""
          // input options
          type="text"
          // type="number"
          className="w-full border-[1px] border-gray-200 p-2 rounded-lg "
          // placeholder="John Doe"
          {...register("CardNumber")}
        />
        <p className="text-red-500"> {errors?.CardNumber?.message} </p>
      </div>
      <div className="">
        <label htmlFor="" className="text-sm font-semibold mb-2">
          Expiration Date
        </label>
        {/* expiration date */}
        <div className="flex space-x-2">
          <div className="w-1/2  flex justify-between space-x-5">
            <div className="flex flex-col">
              {" "}
              <input
                type="number"
                className="w-full border-[1px] border-gray-200 p-2 rounded-lg  "
                placeholder="MM"
                {...register("ExpirationDateMM")}
              />
              <p className="text-red-500">
                {" "}
                {errors?.ExpirationDateMM?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                className="w-full border-[1px] border-gray-200 p-2 rounded-lg "
                placeholder="YY"
                inputProps={{ min: 4, max: 10 }}
                {...register("ExpirationDateYY")}
              />
              <p className="text-red-500">
                {" "}
                {errors?.ExpirationDateYY?.message}
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <input
              type="number"
              className="w-full border-[1px] border-gray-200 p-2 rounded-lg "
              placeholder="CVV"
              {...register("CVV")}
            />
            <p className="text-red-500"> {errors?.CVV?.message} </p>
          </div>
        </div>
        {/* button confirm */}
        <div className="flex  mt-8">
          <button
            // onSubmit={handleSubmit(onSubmit)}
            type="submit"
            className="bg-[#21092f] text-white p-2 rounded-lg w-full  hover:bg-purple-800 "
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
