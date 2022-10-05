import { Routes, Route } from "react-router-dom";
import Caja from "./pages/Caja";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <main
      style={{
        backgroundColor: "#112D4E",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/cajas" element={<Caja />} />
      </Routes>
    </main>
  );
}

export default App;
