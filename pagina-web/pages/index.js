import { Parallax } from "@react-spring/parallax";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Parallax pages={3} horizontal>
        <Header />
      </Parallax>
    </>
  );
}
