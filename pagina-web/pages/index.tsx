import { Parallax } from "@react-spring/parallax";
import Header from "../components/Header";
import MainPageSections from "../components/MainPageSections";
import SocialSection from "../components/SocialSection";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Parallax pages={3} horizontal className="bg-gradient-to-br to-sky-900 from-indigo-900">
        <Header />
        <MainPageSections />
        <SocialSection />
      </Parallax>
    </>
  );
}

export default Home