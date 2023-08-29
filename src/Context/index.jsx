import { createContext, useState } from "react";


const TravelContext = createContext();

const TravelProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        console.log("change", isDarkMode);
    };

    return (
        <TravelContext.Provider
        value={{
            isDarkMode,
            setIsDarkMode,
            toggleDarkMode,
        }}
        >
            {children}
        </TravelContext.Provider> 
    );
}

export { TravelContext, TravelProvider };