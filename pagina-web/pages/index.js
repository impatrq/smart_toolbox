import { Parallax } from "@react-spring/parallax";
import Header from "../components/Header";
import MainPageSections from "../components/MainPageSections";

export default function Home() {
  return (
    <>
      <Parallax pages={3} horizontal>
        <Header />
        <MainPageSections />
      </Parallax>
    </>
  );
}
