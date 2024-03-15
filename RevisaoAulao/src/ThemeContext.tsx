//imports do react(componentes que vamos usar)
import React, { createContext, useState, ReactNode } from "react";
//definindo os tipos de dados do nosso contexto
type ThemeContextType ={
    theme: string,
    toggleTheme: () =>void;
}
//definindo o tipo de dados das propriedades dos componentes
type ThemeProviderProps= {
    children:ReactNode;
}
// criando nosso themeContext com valor padrão
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    /// Estado que guarda o tema atual, porém vai iniciar com white
    const[theme,setTheme] = useState('white');
    // função para alternar entre os temas black e white
    const toggleTheme = () =>{
        setTheme((currentTheme) => (currentTheme ==='white'?'black' : 'white'));
    }
    // valor que será passado aos componentes filhos
    const value = {theme, toggleTheme};
    // o provider passa o valor para os componentes dentro dele
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};