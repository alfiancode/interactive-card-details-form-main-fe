import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ThankYouPage from "./pages/ThanksYouPage";
import { atom } from "recoil";
const CardholderName = atom({
  key: "CardholderName",
  default: "0000 0000 0000 0000",
});
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
