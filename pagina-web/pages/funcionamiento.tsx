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
          src={"pictures/10Planificando las secciones.jpg"}
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
        <h4 className="text-center mb-1 text-white font-bold text-3xl">
          Aplicación móvil
        </h4>
        <h3 className="max-w-xl w-full md:text-2xl sm:text-xl text-lg md:px-14 text-center prose sm:leading-9 leading-7 text-white mt-3">
          La aplicación móvil posee 3 pestañas:
          <ul className="text-xl mt-3 mb-4 text-left">
            <li className="my-1">
              <span className="font-semibold">Actividades</span>: Muestra las
              actividades a realizar
            </li>
            <li className="my-1">
              <span className="font-semibold">Herramientas</span>: Muestra las
              herramientas faltantes de la caja vinculada al usuario
            </li>
            <li className="my-1">
              <span className="font-semibold">Caja de herramientas</span>:
              Permite vincular el usuario con una caja mediante un escáner QR
            </li>
          </ul>
        </h3>
        <h4 className="text-center mt-4 mb-1 text-white font-bold text-3xl">
          Interfaz gráfica
        </h4>
        <h3 className="max-w-xl md:text-2xl sm:text-xl text-lg md:px-14 text-center prose sm:leading-9 leading-7 text-white mt-3">
          La interfaz gráfica permite:
          <ol className="mt-3 mb-4 text-xl text-left">
            <li className="my-1">Ver el estado de cada caja</li>
            <li className="my-1">Ver los operario vinculados cada caja</li>
            <li className="my-1">
              Ver las herramientas faltantes de cada caja
            </li>
            <li className="my-1">Subir las actividades de cada operario</li>
            <li className="my-1">Enviar la señal de guardado</li>
          </ol>
        </h3>
        <h4 className="text-center mt-4 mb-1 text-white font-bold text-3xl">
          Caja de herramientas
        </h4>
        <h3 className="max-w-xl md:text-2xl sm:text-xl text-lg md:px-14 text-center prose sm:leading-9 leading-7 text-white mt-3">
          Al terminar la jornada de trabajo, la caja recibirá la señal de
          guardar y entonces empezará su función:
          <ol className="text-xl w-full mt-3 mb-4 text-left">
            <li className="my-1">
              La caja detectará si cada cajón está abierto.
            </li>
            <li className="my-1">
              Si está abierto leera el estado de cada herramienta en ese cajón.
            </li>
            <li className="my-1">
              Si la herramienta no se encuentra allí activará la alarma y se
              avisará a el operario vinculado a esa caja.
            </li>
          </ol>
        </h3>
      </div>
    </div>
  );
};

export default funcionamiento;
