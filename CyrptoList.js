import React from "react";
import CryptoCard from "./CryptoCard";

const CyrptoList = ({ coinsData }) => {
  console.log("props is  ", coinsData);
  return (
    <div className="flex flex-wrap justify-evenly">
      {coinsData.map((i, index) => {
        return (
          <CryptoCard
            key={index}
            image={i.image}
            name={i.name}
            price={i.current_price}
          />
        );
      })}
    </div>
  );
};

export default CyrptoList;
