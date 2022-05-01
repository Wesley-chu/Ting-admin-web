
const LevelButton = () => {
  const arr = ["初級","初中級","中級","上級"]

  return (
    <div>
      {
        arr.map((value,index) => {
          return(<button className="levelButton buttonType" key={index}>{value}</button>)
        })
      }
    </div>
  );

}

export default LevelButton