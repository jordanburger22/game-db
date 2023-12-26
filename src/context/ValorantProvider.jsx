import React, { useState, createContext, useContext } from 'react';
import { useValorantAgents } from '../hooks';


export const ValorantContext = createContext()


export const ValorantProvider = ({children}) => {

    const valorantAgentAPI = useValorantAgents()




    return(
        <ValorantContext.Provider value={{valorantAgentAPI}}>
            {children}
        </ValorantContext.Provider>
    )
}


export const useValorantContext = () => useContext(ValorantContext)