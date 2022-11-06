import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ThankYouPage from "./pages/ThanksYouPage";
import { atom } from "recoil";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
