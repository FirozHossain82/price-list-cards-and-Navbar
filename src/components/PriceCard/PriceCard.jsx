import React from "react";
import Feature from "../Feature/Feature.jsx";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-teal-200 mt-6 rounded-md p-5 flex flex-col ">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-purple-600 ">
          {price.prices}
        </span>
        <span className="text-2xl font-semibold text-green-500">/Month</span>
      </h2>
      <h5 className="tex-2xl font-bold text-center my-4">{price.name}</h5>
      <p className=" underline font-bold text-lg text-fuchsia-400 mb-2">Features:</p>
      {price.features.map((feature, idx) => (
        <Feature 
        feature={feature}
        key={idx}
        ></Feature>
      ))}
      <button className="w-full mt-auto hover:bg-teal-800  bg-violet-500 py-2 rounded-md text-white font-bold">Buy Now</button>
    </div>
  );
};

export default PriceCard;
