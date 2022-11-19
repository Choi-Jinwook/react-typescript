import "../css/MainBoard.css";

export const MainBoard = () => {
  return (
    <div className="temp-box">
      <div className="header">자유게시판</div>
      <table className="mainBoard">
        <thead>
          <tr>
            <th className="mainBoardNumber">번호</th>
            <th className="mainBoardTitle">제목</th>
            <th className="mainBoardComment">댓글</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mainBoardNumber" id="body">
              1
            </td>
            <td className="mainBoardTitle" id="body">
              예시입니다
            </td>
            <td className="mainBoardComment" id="body">
              0
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
