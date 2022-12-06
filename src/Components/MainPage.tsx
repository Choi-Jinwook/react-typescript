import images from "../images/index";
import { MainBoard } from "./MainBoard";
import { MainNews } from "./MainNews";
import { Login } from "./Login";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="main-container">
        <div className="logo"></div>
        <div className="temp-box">Profile</div>
        <Login></Login>
        <div className="temp-box box-four">
          <Link to="/home">
            <img src={images.homeImg} alt="홈" className="controlBtn"></img>
          </Link>
          <div className="gap-box"></div>
          <Link to="/profile">
            <img
              src={images.profileImg}
              alt="프로필"
              className="controlBtn"
            ></img>
          </Link>
          <div className="gap-box"></div>
          <Link to="/soccer">
            <img src={images.soccerImg} alt="축구" className="controlBtn"></img>
          </Link>
          <div className="gap-box"></div>
          <Link to="/esports">
            <img
              src={images.esportsImg}
              alt="E스포츠"
              className="controlBtn"
            ></img>
          </Link>
          <div className="blank"></div>
        </div>
        <MainBoard></MainBoard>
        <MainNews></MainNews>
      </div>
    </>
  );
};
