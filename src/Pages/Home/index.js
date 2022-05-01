import "./index.css"
import LevelButton from "./components/LevelButton";
import Edit from "./components/Edit";
import LearnPoint from "./components/LearnPoint";

const Home = () => {
  return (
    <div>
      <LevelButton/>
      <Edit/>
      <LearnPoint/>
    </div>
  );

}

export default Home