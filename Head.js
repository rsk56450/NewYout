import React from "react";
import "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "../Store/store";
import { OpenMenu } from "../Store/slices";
import "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ResultPage from "./ResultPage";
import { setDarkMode } from "../Store/slices";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [sugeestionList, setsugeestionList] = useState([]);
  const [showItems, setShowItems] = useState(true);

  const handleSuggestionClick = (e) => {
    window.open("/results?search_query=" + searchQuery);
  };

  const getSuggestionData = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );

    const json = await data.json();

    setsugeestionList(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestionData();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const hamburgerButton = () => {
    dispatch(OpenMenu());
  };

  return (
    <div className="h-16 w-full shadow-lg flex ">
      <div className="flex">
        <img
          className="h-12 w-12 p-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          onClick={hamburgerButton}
        ></img>
        <a href="/">
          <img
            className="h-12 w-20 p-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
          ></img>
        </a>
      </div>
      <div className="h-12 w-[35rem] pt-2 flex absolute right-[33%]">
        <input
          type="text"
          placeholder="Search Something..."
          className="border border-slate-600 w-[35rem] rounded-l-full px-4"
          value={searchQuery}
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
          onBlur={() => {
            setShowItems(false);
          }}
          onFocus={() => {
            setShowItems(true);
          }}
        />
        <button
          className="bg-slate-500 px-4 rounded-r-full"
          onClick={handleSuggestionClick}
        >
          🔍
        </button>
        {
          <div className=" absolute top-[48px] rounded-r-sm w-[32rem]">
            {/* <ul className="bg-white">
              {sugeestionList.map((i, index) => {
                return (
                  <li
                    key={index}
                    className="rounded-lg border: border-b-2 cursor-pointer m-2 p-2"
                    onClick={(e) => {
                      console.log(
                        "sugeestion clicked",
                        e.currentTarget.innerText
                      );

                      setsearchQuery(e.currentTarget.innerText);

                      handleSuggestionClick(e);
                    }}
                  >
                    🔍 {i}
                  </li>
                );
              })}
            </ul> */}

            <div className="bg-white">
              {sugeestionList.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-lg border: border-b-2 cursor-pointer m-2 p-2 bg-white"
                    onClick={(e) => {
                      console.log(
                        "sugeestion clicked",
                        e.currentTarget.innerText
                      );

                      setsearchQuery(e.currentTarget.innerText);

                      handleSuggestionClick(e);
                    }}
                  >
                    🔍 {i}
                  </div>
                );
              })}
            </div>
          </div>
        }
      </div>

      <div>
        <img
          className="h-12 w-12 absolute left-[84rem]"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
