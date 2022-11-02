import NavBar from "../components/NavBar";
import fs from "fs";
import path from "path";
import Galeria from "../components/Galeria";
import { NextPage } from "next";

const imagenes: NextPage = ({ pictures }: { pictures: String[] }) => {
  const images = pictures.map((i) => `/pictures/${i}`);
  return (
    <div className="bg-[#16213E] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">
            Galería de imágenes
          </h1>
        </div>
      </div>
      <div className="p-10 grid place-items-center">
        <Galeria images={images} />
      </div>
    </div>
  );
};

export default imagenes;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public/pictures"));
  return {
    props: {
      pictures: files,
    },
  };
}
