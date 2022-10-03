import NavBar from "../components/NavBar";
import { NextPage } from "next";

const circuitos: NextPage = () => {
  return (
    <div className="bg-[#16213E] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">Circuitos</h1>
        </div>
      </div>
      <div className="mt-10 mx-10 pb-10 place-items-center grid">
        <h4 className="text-center mb-7 text-white text-2xl">
          Placa principal
        </h4>
        <img className="rounded-lg img-fluid" src={"/circuito.png"} />
        <img className="rounded-lg img-fluid mt-3" src={"/pcb.png"} />
        <h3 className="prose text-xl text-white mt-7">
          La placa de control principal está compuesta por:
          <ul className="mt-2 mb-4">
            <li className="my-1">El microcontrolador ESP-WROOM-32</li>
            <li className="my-1">Un multiplexor 74HC4067</li>
            <li className="my-1">Borneras para los componentes externos</li>
            <li className="my-1">Una fuente step-up mt3608</li>
            <li className="my-1">Un transistor BJT</li>
            <li className="my-1">Resistencias varias</li>
          </ul>
          Fuera de la la placa de control principal se encuentran:
          <ul className="my-2">
            <li className="my-1">
              Microswitches para la detección de herramientas
            </li>
            <li className="my-1">Contactos magnéticos</li>
            <li className="my-1">Una alarma</li>
            <li className="my-1">Una pila de 3,7V</li>
            <li className="my-1">Un portapilas</li>
            <li className="my-1">Un display de batería</li>
          </ul>
        </h3>
        {/* <div className="h-1/2 max-w-full mb-8">
          <div className="grid place-items-center mb-7 max-w-full">
            <h1 className="text-center text-white text-5xl my-3">Planos</h1>
          </div>
        </div>
        <img className="rounded-lg img-fluid" src={"/planos.jpg"} /> */}
      </div>
    </div>
  );
};

export default circuitos;
