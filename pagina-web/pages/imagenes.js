import NavBar from "../components/NavBar";
import fs from "fs";
import path from "path";
import Galeria from "../components/Galeria";

export default function imagenes({ pictures }) {
  const images = pictures.map((i) => `/pictures/${i}`);
  return (
    <div className="bg-[#130b10] min-h-screen">
      <NavBar />
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
