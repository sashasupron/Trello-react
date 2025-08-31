import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/mainPage";
import { BoardPage } from "../pages/boardPage";



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/board" element={<BoardPage />} />
    </Routes>
  );
};

export { Router };