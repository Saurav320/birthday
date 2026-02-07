import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import CardPage from "./components/Cardpage";
import Gridgallery from "./components/Gridgallery";
import Music from "./components/Music";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/music" element={<Music />} />
        <Route path="/grid" element={<Gridgallery />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
