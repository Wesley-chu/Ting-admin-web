const Words = () => {
  return (
    <div className="blockColor marginBottom marginTop">
      <span>
        関連単語：
        <input className="inputWidth2 margin" type="text" />
        <input className="inputWidth2 margin" type="text" />
        <button className="buttonType margin">確認</button>
        <div>
          <button className="margin wordStyle">好吃 美味しい</button>
          <button className="margin wordStyle">好吃 美味しい</button>
          <button className="margin wordStyle">好吃 美味しい</button>
          <button className="margin wordStyle">好吃 美味しい</button>
          <button className="margin wordStyle">好吃 美味しい</button>
        </div>
      </span>
    </div>
  );
};

export default Words;
