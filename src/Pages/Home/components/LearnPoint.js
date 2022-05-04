import { useEffect, useState } from "react";
import PointList from "./learnPointComponents/PointList";

const LearnPoint = ({ listData }) => {
  const setSubId = new Set();
  listData.map((item) => {
    const {subId} = item
    setSubId.add(subId)
  })
//const {uid, subId, title, words, grammarContent, example, practice} = item
  return (
    <div className="learnPoint">
      {[...setSubId].map((i) => {
          return(
            <PointList key={i} blockNum={i} />
          );
        })}
    </div>
  );
};

export default LearnPoint;
