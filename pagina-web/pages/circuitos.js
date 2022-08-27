import NavBar from "../components/NavBar";

export default function nosotros() {
  return (
    <div className="bg-[#130b10] min-h-screen">
      <NavBar />
      <div className="h-1/2 max-w-full">
        <div className="grid place-items-center my-7 max-w-full">
          <h1 className="text-center text-white text-5xl mt-3">Circuitos</h1>
        </div>
      </div>
      <div className="m-10 place-items-center grid">
        <h4 className="text-center mb-7 text-white text-2xl">
          Placa principal
        </h4>
        <img className="rounded-lg img-fluid" src={"/circuito.jpg"} />
        <h3 className="prose text-xl text-white mt-7">
          La placa de control principal está compuesta por:
          <ul className="mt-2 mb-4">
            <li className="my-1">El microcontrolador ESP-WROOM-32</li>
            <li className="my-1">
              Dos capacitores del orden de los microfaradios
            </li>
            <li className="my-1">Un multiplexor 74HC4067</li>
            <li className="my-1">Borneras para los componentes externos</li>
            <li className="my-1">Un regulador de tensión LM7805</li>
            <li className="my-1">Un relé 250VAC 15A</li>
            <li className="my-1">Un transistor BJT</li>
            <li className="my-1">Un diodo para el relé</li>
            <li className="my-1">Resistencias varias</li>
          </ul>
      
        </h3>
        <h4 className="text-center my-7 text-white text-2xl">Planos</h4>
        <img className="rounded-lg img-fluid" src={"/circuito.jpg"} />
      </div>
    </div>
  );
}
