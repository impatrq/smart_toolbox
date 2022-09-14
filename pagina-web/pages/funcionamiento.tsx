import NavBar from "../components/NavBar";
import { NextPage } from "next";

const funcionamiento: NextPage = () => {
  return (
    <div className="bg-[#16213E] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">
            Nuestro objetivo
          </h1>
        </div>
      </div>
      <div className="mt-10 sm:mx-10 mx-4 pb-10 place-items-center grid">
        <h3 className="md:text-2xl sm:text-xl text-lg md:px-14 text-center prose sm:leading-9 leading-7 text-white mt-7">
          Smart Toolbox es un producto que ofrecemos para brindar un{" "}
          <span className="font-bold">
            nuevo sistema de orden y seguimiento de herramientas en el espacio
            de trabajo
          </span>
          , para así{" "}
          <span className="font-bold underline">prevenir accidentes</span> o
          perdidas de dinero en bienes laborales. Este sistema poseerá una{" "}
          <span className="font-bold">
            lista de actividades que le brindará al trabajador una mayor
            comodidad
          </span>
          , además de reducir el margen de error por un olvido. Adicionalmente,
          se podrán controlar las cajas inteligentes a través de una{" "}
          <span className="font-bold">interfaz gráfica</span>.
        </h3>
        <img
          className="my-5 lg:w-1/2 rounded-lg img-fluid"
          src={"pictures/4Una Smart Toolbox.jpg"}
        />
      </div>
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">
            Funcionamiento
          </h1>
        </div>
      </div>
      <div className="mt-10 sm:mx-10 mx-4 pb-10 place-items-center grid">
        <h3 className="md:text-2xl sm:text-xl text-lg md:px-14 text-center prose sm:leading-9 leading-7 text-white mt-7">
          Durante la jornada de trabajo, el operario dispondrá de todas las
          tareas a realizar en el día en la aplicación móvil. Estas serán
          cargadas a través de una página web. Después de terminar la jornada de
          trabajo, el operario deberá guardar todas las herramientas en la caja
          y, de este modo, evitar el extravío de éstas. En el caso contrario, al
          cerrarse alguno de los cajones, el sistema detectará que faltan
          herramientas, avisándole de esto mediante un sonido. Los utensilios
          faltantes se podrán visualizar en la aplicacion móvil.
        </h3>
        <img
          className="my-5 lg:w-1/2 rounded-lg img-fluid"
          src={"diagramaflujo.png"}
        />
        {/* <h4 className="text-center mb-7 text-white font-bold text-3xl">
          Aplicación móvil
        </h4> */}
      </div>
    </div>
  );
};

export default funcionamiento;
