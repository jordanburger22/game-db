import React, { useState, createContext, useContext } from 'react';
import { useValorantAgents, useValorantWeapons } from '../hooks';


export const ValorantContext = createContext()


export const ValorantProvider = ({children}) => {

    const valorantAgentAPI = useValorantAgents()

    const valorantWeaponAPI = useValorantWeapons()


    return(
        <ValorantContext.Provider value={{valorantAgentAPI , valorantWeaponAPI}}>
            {children}
        </ValorantContext.Provider>
    )
}


export const useValorantContext = () => useContext(ValorantContext)