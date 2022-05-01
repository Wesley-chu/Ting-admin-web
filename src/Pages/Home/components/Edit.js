import Words from "./editComponents/Words";
import Grammar from "./editComponents/Grammar";
import Practice from "./editComponents/Practice";
import Title from "./editComponents/Title";

const Edit = () => {
  return (
    <>
      <div className="setNewStyle marginTop">
        <button className="setNewButton setDistence">新規</button>
      </div>

      <div className="edit">
        <div>
          <Title />
          <Words />
          <Grammar />
          <Practice />
          <div className="marginBottom">
            <button className="buttonType2">保存</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
