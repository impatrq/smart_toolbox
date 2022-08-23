import NavBar from "../components/NavBar";
import fs from "fs";
import path from "path";
import Galeria from "../components/Galeria";

export default function imagenes({ pictures }) {
  const images = pictures.map((i) => `/pictures/${i}`);
  return (
    <div className="bg-[#130b10] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">
            Galería de imágenes
          </h1>
        </div>
      </div>
      <div className="m-10">
        <Galeria images={images} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public/pictures"));
  return {
    props: {
      pictures: files,
    },
  };
}
