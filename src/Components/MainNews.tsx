import data from "../data/matches.json";
import "../css/Login.css";

interface result {
  gameId: number;
  matchSeq: null;
  roundSeq: number;
  gameName: null;
  startDate: string;
  startTime: string;
  periodType: string;
  finalResultType: string;
  gameStatus: string;
  op: {
    importance: number;
    textRelay: boolean;
  };
  seasonKey: string;
  seasonName: string;
  currentSeasonGameTypeId: number;
  currentSeasonGameDetailTypeId: number;
  leagueCode: string;
  leagueName: string;
  fieldName: string;
  gameType: {
    gameTypeId: number;
    nameKo: string;
    name: string;
  };
  gameDetailType: {
    gameDetailTypeId: number;
    nameKo: string;
    name: string;
  };
  homeTeamId: number;
  homeTeamName: string;
  homeWlt: string;
  homeResult: string;
  awayTeamId: number;
  awayTeamName: string;
  awayWlt: string;
  awayResult: string;
  homeTeamImageUrl: string;
  awayTeamImageUrl: string;
  homeShootout: null;
  awayShootout: null;
}

const matchResult = (date: { [date: string]: result }) => {
  return data.schedule[date][0].gameId;
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
