import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";

export default function Navigate() {
  const text = useRef(null);
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
    const typed = new Typed(text.current, {
      strings: [
        `🛠 Seguridad, orden y eficiencia 🛠`,
      ],
      startDelay: 300,
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, [windowSize]);

  return (
    <h5 ref={text} className="fixed-bottom mb-3 text-white font-bold text-center"></h5>
  );
}
