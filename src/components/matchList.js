// PlayerList.js

import React from "react"; //optional
// import matchData from '../data/matchData';
import Match from "./match";

function MatchList(props) {

  const matches = props.matchData.map((match) => {
    return (
      <Match
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });
  
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;
