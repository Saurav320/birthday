import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cardpage.css";

// 👉 last card ke liye local image
// import lastImg from "../assets/image9.jpeg";
import image1 from "../assets/image4.jpeg";


export default function CardPage() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/92/57/97/925797449133112cb7a750f2f1b6d0b0.gif",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/d4/42/30/d4423096edfdf20ee5c0ee2812ece659.gif",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/51/bb/81/51bb81a229f083ce6c73762101f740dc.gif",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/originals/f5/63/0d/f5630ddc114edca5dfec76ae5996b152.gif",
    },
    
    {
      id: 5,
      img: image1, // ✅ FILE IMAGE (last card)
    },
  ];
   const cardss = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/92/57/97/925797449133112cb7a750f2f1b6d0b0.gif",
      quote: "🎉Many Many Happy Returns of the Day💖",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/d4/42/30/d4423096edfdf20ee5c0ee2812ece659.gif",
      quote: "mai chali mai chali… drama queen mode ON 😂💃"
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/51/bb/81/51bb81a229f083ce6c73762101f740dc.gif" ,
      quote: "❤️ Market se aayi hai… fashion upgraded, budget downgraded 😂💅 "
    },
    {
      id: 4,
      img: "https://i.pinimg.com/originals/f5/63/0d/f5630ddc114edca5dfec76ae5996b152.gif" ,
      quote: "Ye GIF nahi, tum ho 😆✨"
    },
   
    {
      id: 5,
      img: image1,
      quote: "❤️ Aaj ek saal aur badi… par behave bilkul same 🤭🤣 ❤️",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="cardPage">
      {/* CARD */}
      <div className="card">
        <img
          src={cards[index].img}
          alt={`card-${index + 1}`}
          height="300px"
        />
        
        {/* ✨ QUOTE */}
        <p className="quote">{cardss[index].quote}</p>

        {/* 👉 sirf last card pe extra buttons */}
        {index === cards.length - 1 && (
          <>
            <button onClick={() => navigate("/message")}>💌 Message</button>
            <button onClick={() => navigate("/gallery")}>🖼 Gallery</button>
            <button onClick={() => navigate("/music")}>🎵 Music</button>
          </>
        )}
      </div>

      {/* CARD KE BAHAR */}
      <div className="navBtns">
        <button onClick={prev} disabled={index === 0}>
          ⬅ Prev
        </button>
        <button onClick={next} disabled={index === cards.length - 1}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
