import React from "react";
import "./Music.css";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();

  return (
    <div className="music">
      <button onClick={() => navigate("/card")}>
        Close
      </button>

      <h2>🎵 Songs</h2>

      <audio controls src="/musics/Song1.mp3"></audio>
      <audio controls src="/musics/song2.mp3"></audio>
      <audio controls src="/musics/song3.mp3"></audio>
     
    </div>
  );
};

export default Music;
