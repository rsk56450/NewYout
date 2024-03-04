import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestionList } from "../Store/slices";
import InfiniteScroll from "react-infinite-scroll-component";

const ResultPage = () => {
  const [sc_Params, setSc_Params] = useSearchParams();
  const [hMore, sethMore] = useState(true);
  console.log(sc_Params.get("search_query"));

  const dispatch = useDispatch();

  const [dataHolder, setDataHolder] = useState([]);
  const SugeestionList = useSelector((store) => store.app.sugesstionList);

  const [searchData, setSearchData] = useState([]);

  const fetchMoreData = async () => {
    console.log("fetchMoreData fn called ");
    if (searchData.length < 100) {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
          sc_Params +
          "&key=AIzaSyDDEHtyWFTEFlNMuTg5eY8aP4NGCQKLoKk"
      );

      const json = await data.json();
      setSearchData(searchData.concat(json.items));
    } else {
      console.log("serchData.legnth === >>>  ", searchData.length);
      sethMore(false);
    }
  };

  const getSearchData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        sc_Params +
        "&key=AIzaSyDDEHtyWFTEFlNMuTg5eY8aP4NGCQKLoKk"
    );

    const json = await data.json();
    console.log("json reciedc is  ", json.items);
    setSearchData(json.items);
  };
  useEffect(() => {
    getSearchData();
    return () => {};
  }, []);

  return (
    <div className="w-2/3">
      <InfiniteScroll
        dataLength={searchData.length}
        next={fetchMoreData}
        //  height={1000}
        hasMore={hMore}
        endMessage={"  You reached the end of data"}
      >
        {searchData.map((i) => {
          return (
            <Link
              to={"/watch?v=" + i.id.videoId}
              key={i.id.videoId}
              onClick={() => {
                dispatch(setSuggestionList(dataHolder));
              }}
            >
              <VideoCard info={i} />
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ResultPage;
