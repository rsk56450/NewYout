import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Infiscroll = () => {
  //   let arr = [
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //     "data",
  //   ];
  const [datasource, setdatasource] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasMore] = useState(true);
  const fetchMoreData = () => {
    if (datasource.length < 200) {
      setTimeout(() => {
        setdatasource(datasource.concat(Array.from({ length: 20 })));
      }, 1000);
    } else {
      sethasMore(false);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={datasource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        endMessage={"you reached the end of data"}
        loader={"Loading..."}
        height={500}
      >
        {datasource.map((i, index) => {
          return (
            <div className="m-2 p-2 bg-slate-300 border border-b-violet-600">
              This is div #{index + 1} inside infinite scroll
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Infiscroll;
