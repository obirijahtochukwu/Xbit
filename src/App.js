import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clientApp/styles/theme.scss";
import { Faqs } from "./clientApp/Faq/Faqs";
import { Login } from "./clientApp/Login/Login";
import { Auction } from "./clientApp/Aunction/Auction";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/auction" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/faqs"} element={<Faqs />} />
      <Route path={"/auction"} element={<Auction />} />
    </Routes>
  );
}

export default App;
