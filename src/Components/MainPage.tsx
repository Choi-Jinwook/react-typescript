import images from "../images/index";
import { MainBoard } from "./MainBoard";
import { MainNews } from "./MainNews";
import { Login } from "./Login";

export const MainPage = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="main-container">
        <div className="blank">Logo</div>
        <div className="temp-box">무엇을 넣을지 고민해보세요</div>
        <Login></Login>
        <div className="temp-box box-four">
          <img src={images.homeImg} className="controlBtn"></img>
          <div className="gap-box"></div>
          <img src={images.profileImg} className="controlBtn"></img>
          <div className="gap-box"></div>
          <img src={images.soccerImg} className="controlBtn"></img>
          <div className="gap-box"></div>
          <img src={images.esportsImg} className="controlBtn"></img>
          <div className="gap-box"></div>
          <div className="blank"></div>
        </div>
        <MainBoard></MainBoard>
        <MainNews></MainNews>
      </div>
    </>
  );
};
