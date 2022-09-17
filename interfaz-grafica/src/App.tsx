import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tareas from "./Tareas";

function App() {
  return (
    <main style={{ maxWidth: "100vw", minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/cajas" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
