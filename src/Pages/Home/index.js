import { useEffect, useState } from "react";
import { API_GET_LEVELC } from "../../global/constants";

import "./index.css";
import LevelButton from "./components/LevelButton";
import Edit from "./components/Edit";
import LearnPoint from "./components/LearnPoint";
import store from "../../store";
import { act } from "react-dom/test-utils";

async function fetchData(set) {
  const res = await fetch(API_GET_LEVELC)
  const data = await res.json()

  const action = {
    type: "show_point_list",
    value: data
  }
  store.dispatch(action);
  
  set(data)
}

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch(API_GET_LEVELC)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // })
    fetchData(setData);
  }, []);

  return (
    <div>
      <LevelButton />
      <Edit />
      <LearnPoint listData={data}/>
    </div>
  );
};

export default Home;
