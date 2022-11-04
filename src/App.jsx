import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import bgMainMobile from "./assets/images/bg-main-mobile.png";

import CardBackMobile from "./components/CardBackMobile";
import CardFrontMobile from "./components/CardFrontMobile";
import CardBack from "./components/CardBack";
import FormSection from "./components/FormSection";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1440px] flex flex-col md:flex-row  mx-auto ">
      <div className="basis-1/3 h-screen relative ">
        <img
          src={bgMainDesktop}
          alt="bgdesktop"
          className=" bg-cover w-full hidden md:flex md:h-screen"
        />
        <img
          src={bgMainMobile}
          alt="bgMobile"
          className=" bg-cover w-full h-60  flex md:hidden"
        />
        <CardBackMobile />
        <CardFrontMobile />
      </div>
      <FormSection />
    </div>
  );
}

export default App;
