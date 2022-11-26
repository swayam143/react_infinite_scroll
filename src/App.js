import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

//Whenever user reaches to bottom it call next and hasmore function prop inside it

const App = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasMore] = useState(true);

  const fetchMoredata = () => {
    //
    //HERE WE MAKE API CALL
    //

    // if we have data of particular length like (300,1500,2500)
    if (dataSource.length < 100) {
      setTimeout(() => {
        //
        // Here we add another data in our state after 5 millisecond
        //
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      sethasMore(false);
    }
  };
  return (
    <div className="App-header ">
      {/* We can also give Scroll according to parent div height */}
      <div id="parentScrollDiv" style={{ height: "98vh", overflow: "auto" }}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoredata}
          hasMore={hasMore}
          // whene data is loading
          loader={<p>Loading...</p>}
          //when data from api is no more we give sethasMore(false) and after that
          endMessage={<p>Data ends</p>}
          //we can give height as well
          // height={500}
          //scroll height according to parent div
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => (
            <div className="ren_div" key={index}>
              This is a div #{index + 1}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
