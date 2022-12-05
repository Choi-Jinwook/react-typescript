import "../css/MainBoard.css";
import { MakeBoard } from "./Board/MakeBoard";

export const MainBoard = () => {
  return (
    <div className="temp-box">
      <div className="header">자유게시판</div>
      <table className="mainBoard">
        <thead>
          <tr>
            <th className="mainBoardNumber">번호</th>
            <th className="mainBoardTitle">제목</th>
            <th className="mainBoardUserNickname">글쓴이</th>
            <th className="mainBoardComment">댓글</th>
          </tr>
        </thead>
        <tbody>
          <MakeBoard></MakeBoard>
        </tbody>
      </table>
      <button
        className="makePostBtn"
        onClick={() => {
          alert("z");
        }}
      >
        글 작성
      </button>
    </div>
  );
};
