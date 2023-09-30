import { createContext, ReactNode, useState } from "react";

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);

function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
