import ContactCard from "../components/ContactCard";
import NavBar from "../components/NavBar";
import { Row } from "react-bootstrap";
import { NextPage } from "next";

const nosotros: NextPage = () => {
  return (
    <div className="bg-[#16213E] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <img
            className="opacity-75 max-w-full"
            src={"/logo_impa.webp"}
            alt="logo"
          />
          <h2 className="text-center text-white text-xl mt-3">
            Somos un grupo de alumnos de E.E.S.T. N°7 &quot;Taller Regional
            Quilmes&quot; (IMPA)
          </h2>
        </div>
      </div>
      <div className="w-full grid place-items-center">
        <Row className="w-full">
          {/* <ContactCard
            person="Joaquín Martínez"
            text="Planos y Modelos"
            github="https://github.com/joacozape04"
            email="mailto:joaquinosmartinez@gmail.com"
            ig="https://www.instagram.com/joaquinosmartinez"
          /> */}
          <ContactCard
            person="Lucas Herrera"
            text="Materiales y Estructura"
            github="https://github.com/lucas-le-herrera"
            email="mailto:lucassherreraa2003@gmail.com"
            ig="https://www.instagram.com/lucas.herreraa.19"
          />
          <ContactCard
            person="Federico Torres"
            text="Microcontrolador, Interfaz gráfica y Página web"
            github="https://github.com/federicotorres233"
            email="mailto:federicotorres233@protonmail.com"
            ig="https://www.instagram.com/fede.torres11"
          />
        </Row>
        <Row className="w-full sm:w-1/2">
          <ContactCard
            person="Ramiro Mariani"
            text="Estructura y Aplicación móvil"
            github="https://github.com/RamiroMariani"
            email="mailto:ramiromariani99@gmail.com"
            ig="https://www.instagram.com/rama_764"
          />
        </Row>
        <Row className="w-full">
          <ContactCard
            person="Miqueas Vanore"
            text="Documentación y Diseño"
            github="https://github.com/MiqueasVanore"
            email="mailto:vnmiqueas@gmail.com"
            ig="https://www.instagram.com/miqueasvn"
          />
          <ContactCard
            person="Agustín Esquivel"
            text="Esquemáticos y placas de circuito impreso"
            github="https://github.com/Agustin-Esquivel04"
            email="mailto:esquivel.agustin04@gmail.com"
            ig="https://www.instagram.com/agus_esquivel_1"
          />
        </Row>
      </div>
      <div className="grid place-items-center py-16 px-5">
        <h1 className="text-white my-7">¡Nuestra Escuela!</h1>
        <iframe
          className="rounded-xl w-full md:w-1/2 sm:h-96"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=es&amp;q=Av.%20Otamendi,%20B1878%20Quilmes,%20Provincia%20de%20Buenos%20Aires+(IMPA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default nosotros;
