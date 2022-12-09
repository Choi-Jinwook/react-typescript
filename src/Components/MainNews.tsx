import data from "../data/matches.json";
import "../css/Login.css";

interface result {
  roundSeq: number;
  startDate: string;
  startTime: string;
  finalResultType: string;
  gameStatus: string;
  leagueName: string;
  gameType: {
    nameKo: string;
    name: string;
  };
  gameDetailType: {
    nameKo: string;
    name: string;
  };
  homeTeamName: string;
  homeResult: string;
  awayTeamName: string;
  awayResult: string;
}

interface DailyResult {
  [date: string]: result[];
}

const matchResult = (date: string) => {
  return (data.schedule as DailyResult)[date];
};

export const MainNews = () => {
  return (
    <div className="temp-box news">
      <div>News</div>
      <div></div>
      <div className="login">
        home: 메인 뉴스 \n profile: IT 뉴스 \n soccer: 축구 뉴스 \n esports:
        이스포츠 뉴스
      </div>
    </div>
  );
};
