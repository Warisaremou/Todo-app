import React from "react";
import mobileBg from "../Images/bg-mobile-light.jpg";
import darkMobileBg from "../Images/bg-mobile-dark.jpg";
import desktopBg from "../Images/bg-desktop-light.jpg";
import darkDesktopBg from "../Images/bg-desktop-dark.jpg";
import MatchMediaWrapper from "../js/MatchMediaWrapper";

function Backgroud({ theme }) {
  let mobileBackground;
  let desktopBackground;
  function setMobileBg() {
    if (theme === "dark") {
      mobileBackground = (
        <img
          src={mobileBg}
          alt="mobile-bg"
          className="absolute top-0 left-0 right-0 -z-10 w-full"
        />
      );
    } else {
      mobileBackground = (
        <img
          src={darkMobileBg}
          alt="mobile-bg"
          className="absolute top-0 left-0 right-0 -z-10 w-full"
        />
      );
    }
    return mobileBackground;
  }

  function setDesktopBg() {
    if (theme === "dark") {
      desktopBackground = (
        <img
          src={desktopBg}
          alt="Desktop-bg"
          className="absolute top-0 left-0 right-0 -z-10 w-full"
        />
      );
    } else {
      desktopBackground = (
        <img
          src={darkDesktopBg}
          alt="Desktop-bg"
          className="absolute top-0 left-0 right-0 -z-10 w-full"
        />
      );
    }
    return desktopBackground;
  }

  return (
    <>
      <MatchMediaWrapper
        mobileBackground={setMobileBg()}
        desktopBackground={setDesktopBg()}
      />
    </>
  );
}

export default Backgroud;
