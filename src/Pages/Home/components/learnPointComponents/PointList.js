import { useEffect, useState } from "react";
import store from "../../../../store";

const PointList = ({ blockNum }) => {
  const store1 = store.getState()

  return(
    <>
    <div>
        <span className="fontStyle">学習ポイント{blockNum}</span>
        <div className="bar"></div>
        {store1.map((item) => {
          const {uid, title, subId} = item
          if (subId == blockNum) {
            return(
              <button className="setBlock marginTop listButton" key={uid}>{title}</button>
            );
          }
        })}
    </div>
    <br />
    <br />
    </>
  );

}

export default PointList