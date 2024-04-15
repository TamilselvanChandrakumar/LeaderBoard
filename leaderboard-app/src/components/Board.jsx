import React from "react";
import Profile from "./Profile";

const Board = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="board">
      <h1>Leaderboard</h1>
      <div className="duration">
        <button data-id="7" onClick={handleClick}>
          7 days
        </button>
        <button data-id="30" onClick={handleClick}>
          30 days
        </button>
        <button data-id="0" onClick={handleClick}>
          all time
        </button>
      </div>
      <Profile></Profile>
    </div>
  );
};

export default Board;
