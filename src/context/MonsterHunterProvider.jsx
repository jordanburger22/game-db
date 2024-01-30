import { useState, useContext, createContext } from "react";
import { useMonsterHunterWeapons, useMonsterHunterMonsters } from "../hooks";


export const MonsterHunterContext = createContext()

function MonsterHunterProvider({children}) {

    const monsterHunterWeaponsAPI = useMonsterHunterWeapons()
    const monsterHunterMonstersAPI = useMonsterHunterMonsters()

    return (
        <MonsterHunterContext.Provider value= {{monsterHunterWeaponsAPI, monsterHunterMonstersAPI}}>
            {children}
        </MonsterHunterContext.Provider>
    );
}

export default MonsterHunterProvider;

export const useMonsterHunterContext = () => useContext(MonsterHunterContext)