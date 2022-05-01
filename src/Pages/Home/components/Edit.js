

const Edit = () => {
  return (
    <>
    <div className="setNewStyle marginTop">
      <button className="setNewButton setDistence">新規</button>
    </div>

    <div className="edit">
      <div>
        <div>
          <span className="pointTitle setDistence">
            ID：123456
          </span>
          <span className="pointTitle setDistence">
            ポイント：<input type="text"/>
          </span>
        </div>

        <div className="blockColor marginBottom marginTop">
          <span>
            関連単語：
            <input className="inputWidth2 margin" type="text"/>
            <input className="inputWidth2 margin" type="text"/>
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

        <div className="blockColor marginBottom">
          <div>
            <span className="setBlock">基本構文：</span>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
          <div>
            <span className="setBlock">例文：</span>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
        </div>

        <div className="blockColor marginBottom">
          <span className="setBlock">練習：</span>
          <div>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
          <div>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
          <div>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
          <div>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
          <div>
            <input className="inputWidth3 margin" type="text"/>
            <input className="inputWidth3 margin" type="text"/>
          </div>
        </div>

        <div className="marginBottom">
          <button className="buttonType2">保存</button>
        </div>


      </div>
    </div>
    </>
  )
}

export default Edit 