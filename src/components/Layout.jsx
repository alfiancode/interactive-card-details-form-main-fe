import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import bgMainMobile from "../assets/images/bg-main-mobile.png";
import CardBackMobile from "./CardBackMobile";
import CardFrontMobile from "./CardFrontMobile";
function Layout({ children }) {
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
      <div className="flex justify-center h-screen w-full flex-1 items-center md:pl-24 mt-24 md:mt-0  ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
