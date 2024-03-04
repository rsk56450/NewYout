import React from "react";
import { useSearchParams } from "react-router-dom";
import "react-redux";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import LiveChat from "./LiveChat";
import CommentsContainer from "./ComponentsContainer";

const WatchingPart = () => {
  const [searchParams] = useSearchParams();
  const SugeestionList = useSelector((store) => store.app.sugesstionList);
  console.log("Sygesttion lis t =  ", SugeestionList);

  console.log("**************************");
  console.log("serach params  ", searchParams.get("v"));

  return (
    <>
      <div>
        <div className="flex ">
          <iframe
            width="860"
            height="515"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            {/* <div>
          {SugeestionList.map((i) => {
            return i.map((j) => {
              return <VideoCard info={j} />;
            });
          })}
        </div> */}
            <LiveChat />
          </div>
        </div>
        <div className="mt-[-12.75rem]">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchingPart;
