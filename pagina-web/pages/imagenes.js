import NavBar from "../components/NavBar";
import fs from "fs";
import path from "path";

export default function imagenes({ pictures }) {
  console.log(pictures);
  return (
    <>
      <NavBar />
    </>
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
