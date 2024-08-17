import HomePage from "./components/home";
import NavBar from "./components/NavBar";
import Qpage from "./components/qpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./components/testing";
import TrackList from "./components/songPage";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/qpage" element={<Qpage />}></Route>
          <Route path="/qpage/songs" element={<TrackList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
