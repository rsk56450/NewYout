import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "../Store/store";
import { setSuggestionList } from "../Store/slices";
import { UpdatedVideoCard } from "./VideoCard";

const VideoContainer = () => {
  let count = 0;
  let count2 = 0;
  const SugeestionList = useSelector((store) => store.app.sugesstionList);

  const NewVideoCard = UpdatedVideoCard();

  const dispatch = useDispatch();

  const [dataHolder, setDataHolder] = useState([]);
  const getData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDDEHtyWFTEFlNMuTg5eY8aP4NGCQKLoKk"
    );

    const json = await data.json();

    setDataHolder(json.items);
  };
  useEffect(() => {
    getData();
  }, []);

  let count3 = 0;
  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap justify-evenly w-full ">
        {dataHolder.length === 0
          ? ""
          : dataHolder.map((i) => {
              {
                count3++;
              }
              return (
                <Link
                  to={"/watch?v=" + i.id}
                  className="w-[250px] inline"
                  onClick={() => {
                    dispatch(setSuggestionList(dataHolder));
                  }}
                >
                  {count3 === 1 ? (
                    <div className="border border-b-gray-700 border-solid 2px">
                      {/* <VideoCard info={i} /> */}
                    </div>
                  ) : (
                    ""
                  )}
                  {i.statistics.likeCount > 345210 ? (
                    <VideoCard info={i} />
                  ) : (
                    <NewVideoCard info={i} />
                  )}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default VideoContainer;
