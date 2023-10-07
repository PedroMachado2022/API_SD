import { createContext, useState } from "react";

export const DadosContext = createContext();

// provider

export const DadosContextProvider = ({ children }) => {
    const [Dados, setDados] = useState("")

    return (
        <DadosContext.Provider value={{Dados, setDados}}>{children}</DadosContext.Provider>
    )
};