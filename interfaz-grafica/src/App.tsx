import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import db from "./firebase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
