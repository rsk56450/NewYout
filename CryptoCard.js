import React from "react";

const CryptoCard = ({ image, name, price }) => {
  return (
    <div className="flex ">
      <div className="bg-slate-400 m-4 w-[250px] p-2">
        <div>
          <img src={image}></img>
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
