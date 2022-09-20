import { createContext, useContext, useState } from "react";

const UserContext = createContext({ user: "", setUser: null });

export function UsuarioContextProvider({
  children,
}: JSX.ElementChildrenAttribute) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsuarioContext() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}
