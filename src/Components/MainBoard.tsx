import { useEffect, useState } from "react";
import "../css/MainBoard.css";
import { listen } from "../firebase";

interface Article {
  comments: Array<string>;
  isDeleted: boolean;
  numofComments: number;
  title: string;
  userId: number;
  userNickname: string;
  id: number;
  articleId: number;
}

const MakeBoard = () => {
  const [datas, setDatas] = useState<Array<Article>>([]);
  const [isloading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    listen("articles/", (data) => {
      setDatas(data);
      setIsloading(false);
    });
  }, []);
  const make = datas.map((el: Article) => {
    return (
      <tr key={el.id}>
        <td className="mainBoardNumber" id="body">
          {el.articleId}
        </td>
        <td className="mainBoardNumber" id="body">
          {el.title}
        </td>
        <td className="mainBoardNumber" id="body">
          {el.userNickname}
        </td>
        <td className="mainBoardNumber" id="body">
          {el.numofComments}
        </td>
      </tr>
    );
  });
  return (
    <>
      {isloading ? (
        <tr>
          <td>loading...</td>
        </tr>
      ) : (
        make
      )}
    </>
  );
};

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
    </div>
  );
};
