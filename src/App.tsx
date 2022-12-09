import { useEffect } from "react";
import "./css/App.css";
import data from "./data/matches.json";
import { MainPage } from "./Components/MainPage";
import { Route, Routes } from "react-router-dom";
import { SoccerPage } from "./Components/Scooer/SoccerPage";

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
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/soccer" element={<SoccerPage></SoccerPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
