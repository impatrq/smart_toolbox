import { createContext, useContext, useState } from "react";

const CajaContext = createContext({ caja: "", setCaja: null });

export function CajaContextProvider({
  children,
}: JSX.ElementChildrenAttribute) {
  const [caja, setCaja] = useState("");
  return (
    <CajaContext.Provider value={{ caja, setCaja }}>
      {children}
    </CajaContext.Provider>
  );
}

export function useCajaContext() {
  const { caja, setCaja } = useContext(CajaContext);
  return { caja, setCaja };
}
