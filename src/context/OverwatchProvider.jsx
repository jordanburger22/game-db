import React, { useState, useEffect, createContext, useContext } from 'react';
import { useOverwatchHeroes } from '../hooks';
import { useOverwatchMaps } from '../hooks';

export const OverwatchContext = createContext()


function OverwatchProvider({children}) {


    const overwatchHeroesAPI = useOverwatchHeroes()
    const overwatchMapsAPI = useOverwatchMaps()


    return (
        <OverwatchContext.Provider value={{overwatchHeroesAPI, overwatchMapsAPI}}>
            {children}
        </OverwatchContext.Provider>
    );
}

export default OverwatchProvider;


export const useOverwatchContext = () => useContext(OverwatchContext)