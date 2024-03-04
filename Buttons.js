import React from "react";

const data = [
  "Comedy",
  "Drama",
  "Live",
  "Learn Something",
  "Horror",
  "Kids",
  "News",
  "Songs",
  "Bollywood",
  "Hollywood",
  "Animated",
];

const Buttons = () => {
  return (
    <div>
      {data.map((i) => {
        return (
          <button className=" bg-slate-400 p-5  m-2 rounded-md hover:opacity-80">
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
