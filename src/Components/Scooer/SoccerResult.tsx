import data from "../../data/matches.json";
import "../../css/SoccerResult.css";

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

const getYearMonthDate = () => {
  const day = new Date();
  let arr = [];
  let year = day.getFullYear();
  let month = day.getMonth() + 1;
  let date = day.getDate();
  arr.push(year);
  if (month - 1 >= 10) {
    arr.push(month - 1);
  } else {
    arr.push(`0${month - 1}`);
  }
  if (date >= 10) {
    arr.push(date);
  } else {
    arr.push(`0${date}`);
  }
  let res = "";
  res += arr.join("");

  return res;
};

let homeList: any = [];
let awayList: any = [];
const homeResult = (date: string): any => {
  (data.schedule as DailyResult)[date].map((el) => {
    homeList.push(el.homeResult, el.homeTeamName);
    return homeList;
  });
};
const awayResult = (date: string): any => {
  (data.schedule as DailyResult)[date].map((el) => {
    awayList.push(el.awayResult, el.awayTeamName);
    return awayList;
  });
};
homeResult(getYearMonthDate());
awayResult(getYearMonthDate());

const makeHomeResult = homeList.map((el: any, i: number) => {
  return <div key={i}>{el}</div>;
});

const makeAwayResult = awayList.map((el: any, i: number): any => {
  return <div key={i}>{el}</div>;
});

export const SoccerResult = () => {
  return (
    <div className="temp-box news">
      <div className="homeResult">{makeHomeResult}</div>
      <div className="awayResult">{makeAwayResult}</div>
    </div>
  );
};
