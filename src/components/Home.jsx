import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const PASS = "pagal isha";
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [time, setTime] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0
  });

  useEffect(() => {
    const target = new Date("february 11, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const check = () => {
    if (pass === PASS) {
      navigate("/card");   
    } else {
      alert("Wrong Password ❌");
    }
  };

  return (
    <div className="home">
      <section className="section1">
        <h1>Happy Birthday Isha (पगली) 🤪🎂</h1>

        <div className="timer">
          <div><span>{time.d}</span> Days</div>
          <div><span>{time.h}</span> Hours</div>
          <div><span>{time.m}</span> Min</div>
          <div><span>{time.s}</span> Sec</div>
        </div>

        <div className="gift">
            <img src="https://i.pinimg.com/originals/37/86/40/378640f1af783a3b8938593334118e96.gif" alt=" imagebox src "  width="100px" height="150px"/>
        </div>

        <input
          placeholder="Enter Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={check}>Unlock</button>
      </section>
    </div>
  );
}
