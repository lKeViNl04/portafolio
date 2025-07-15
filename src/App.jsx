import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import E404 from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter basename="/portafolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<E404/>} />
      </Routes>
    </BrowserRouter>
  );
}
