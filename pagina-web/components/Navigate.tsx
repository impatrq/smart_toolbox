import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Navigate() {
  const text = useRef(null);
  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["Desliza horizontalmente para navegar ➡"],
      startDelay: 300,
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h5 ref={text} className="fixed-bottom mb-3 text-white text-center"></h5>
  );
}
