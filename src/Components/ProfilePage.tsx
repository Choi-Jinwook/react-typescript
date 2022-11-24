import images from "../images/index";
import { Login } from "./Login";
import { ProfileNews } from "./ProfileNews";
import { ProfileScreen } from "./ProfileScreen";

export const ProfilePage = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="main-container">
        <div className="blank">Logo</div>
        <div className="temp-box">Profile</div>
        <Login></Login>
        <div className="temp-box box-four">
          <img
            src={images.homeImg}
            alt="이미지 로딩에 실패하였습니다."
            className="controlBtn"
          ></img>
          <div className="gap-box"></div>
          <img
            src={images.profileImg}
            alt="이미지 로딩에 실패하였습니다."
            className="controlBtn"
          ></img>
          <div className="gap-box"></div>
          <img
            src={images.soccerImg}
            alt="이미지 로딩에 실패하였습니다."
            className="controlBtn"
          ></img>
          <div className="gap-box"></div>
          <img
            src={images.esportsImg}
            alt="이미지 로딩에 실패하였습니다."
            className="controlBtn"
          ></img>
          <div className="gap-box"></div>
          <div className="blank"></div>
        </div>
        <ProfileScreen></ProfileScreen>
        <ProfileNews></ProfileNews>
      </div>
    </>
  );
};
