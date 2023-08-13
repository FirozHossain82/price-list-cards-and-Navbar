import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard.jsx";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl text-center text-orange-900  font-bold p-4">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
