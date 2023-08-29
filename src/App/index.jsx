import React from "react";
import AppUI from "./AppUI";
import { TravelProvider } from "../Context";

function App() {
    return (
        <TravelProvider>
            <AppUI />
        </TravelProvider> 
    );
}

export default App