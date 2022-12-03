import { useEffect, useState } from "react";
import { listen } from "../../firebase";

export interface Article {
  comments: Array<string>;
  isDeleted: boolean;
  numofComments: number;
  title: string;
  userId: number;
  userNickname: string;
  id: number;
  articleId: number;
}

export const MakeBoard = () => {
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
