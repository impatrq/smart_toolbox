import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import db from "./firebase";

function App() {
  return (
    <main style={{ maxWidth: "100vw", minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Home />} />
        <Route path="/cajas" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
