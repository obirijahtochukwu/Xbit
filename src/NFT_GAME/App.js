import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.scss";
import Index from "./pages/home/Index";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Index to="/auction" />} />
    </Routes>
  );
}

export default App;
