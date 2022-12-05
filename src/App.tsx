import React, { useEffect } from "react";
import "./css/App.css";
import data from "./data/matches.json";
import { MainPage } from "./Components/MainPage";
function App() {
  useEffect(() => {
    // (async () => {
    //   const res = await (
    //     await fetch("https://www.fotmob.com/api/matches?date=20201020")
    //   ).json();
    //   console.log(res);
    // })();
    console.log(data.schedule[20221101]);
  });

  return (
    <div className="App">
      <MainPage></MainPage>
    </div>
  );
}

export default App;
