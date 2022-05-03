import { useEffect, useState } from "react";

const LearnPoint = ({ listData }) => {

//const {uid, subId, title, words, grammarContent, example, practice} = item
  return (
    <div className="learnPoint">
      <div>
        <span className="fontStyle">学習ポイント１</span>
        <div className="bar"></div>
        <button className="setBlock marginTop listButton">S+V+O</button>
        <button className="setBlock marginTop listButton">S+V+O</button>
        <button className="setBlock marginTop listButton">S+V+O</button>
      </div>
      <br />
      <br />

      <div>
        <span className="fontStyle">学習ポイント２</span>
        <div className="bar"></div>
        <button className="setBlock marginTop listButton">S+V+O</button>
        <button className="setBlock marginTop listButton">S+V+O</button>
        <button className="setBlock marginTop listButton">S+V+O</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default LearnPoint;
