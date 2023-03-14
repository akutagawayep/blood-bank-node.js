import React from "react";
import Footer from "../../components/footer";
import InfoBlock from "./blocks/InfoBlock";
import MapsBlock from "./blocks/MapsBlock";
import StartingBlock from "./blocks/StartingBlock";
import StatisticsBlock from "./blocks/StatistaicsBlock";

const MainPage = () => {
  return (
    <>
      <StartingBlock />
      <InfoBlock/>
      <StatisticsBlock />
      <MapsBlock />
      <Footer/>
    </>
  );
};

export default MainPage;
