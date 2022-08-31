import { Parallax } from "@react-spring/parallax";
import Header from "../components/Header";
import MainPageSections from "../components/MainPageSections";
import SocialSection from "../components/SocialSection";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Parallax pages={3} horizontal>
        <Header />
        <MainPageSections />
        <SocialSection />
      </Parallax>
    </>
  );
};

export default Home;
