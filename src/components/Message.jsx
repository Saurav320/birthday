import { useNavigate } from "react-router-dom";
import "./Message.css"
export default function Message() {
  const navigate = useNavigate();

  return (
    <div className="messagePage">
      <h1>For You(Pagali)😎</h1>

      <p>
        तेरी मुस्कान इतनी ज़बरदस्त है कि
        Mood खराब हो तो भी ठीक हो जाए 😄
        और तेरी बातें इतनी मज़ेदार कि
        हँसी अपने आप आ जाए। 🌸
      </p>

      <button onClick={() => navigate("/card")}>
        🔙 Back
      </button>
    </div>
  );
}
