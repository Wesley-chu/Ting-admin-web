const Title = () => {
  return (
    <div>
      <span className="pointTitle setDistence">
        ID：
        <input className="inputWidth2" type="text" />
      </span>
      <span className="pointTitle setDistence">
        ポイント：
        <input type="text" />
      </span>
    </div>
  );
};

export default Title;
