import React, { useState } from 'react';
import { useSearchContext } from './context/SearchContext';


export const useValorantAgents = () => {
    const [agents, setAgents] = useState([])

    const setAgentsList = (data) => {
        setAgents(data)
    }

    return {
        agents, setAgentsList
    }
}

export const useValorantPlayerCards = () => {
    const [agentPlayerCard, setAgentPlayerCard] = useState({})

    const handleSetAgentPlayerCard = (data) => {
        setAgentPlayerCard(data)
    }

    const [weaponCard, setWeaponCard] = useState({})

    const handleSetWeaponCard = (data) => {
        setWeaponCard(data)
    }

    return {
        agentPlayerCard,
        handleSetAgentPlayerCard,
        weaponCard,
        handleSetWeaponCard
    }
}

export const useValorantWeapons = () => {
    const [valorantWeapons, setValorantWeapons] = useState([])

    const setValorantWeaponsList = (data) => {
        setValorantWeapons(data)
    }


    return {
        valorantWeapons,
        setValorantWeaponsList
    }
}

export const useOverwatchHeroes = () => {
    const [overwatchHeroes, setOverwatchHeroes] = useState([])


    const handleGetRequest = (data) => {
        setOverwatchHeroes(data)
    }

    const [singleHero, setSingleHero] = useState({})

    const handleSingleHero = (data) => {
        setSingleHero(data)
    }

    return {
        overwatchHeroes,
        handleGetRequest,
        singleHero,
        handleSingleHero
    }
}

export const useOverwatchMaps = () => {
    const [maps, setMaps] = useState([])

    const handleSetMaps = (data) => {
        setMaps(data)
    }

    return {
        maps, 
        handleSetMaps
    }
}

export const useLeagueHeroes = () => {
    const [heros, setHeros] = useState([])


    const handleSetHeros = (data) => {
        setHeros(data)
    }

    const [requestedChampion, setRequestedChamiopn] = useState({})

    const handleSetRequestedChampion = (data) => {
        setRequestedChamiopn(data)
    }

    return {
        heros, 
        handleSetHeros,
        requestedChampion,
        handleSetRequestedChampion
    }
}

export const useMonsterHunterWeapons = () => {
    const [weapons, setWeapons] = useState([])


    const handleSetWeapons = (data) => {
        setWeapons(data)
    }

    return {
        weapons, handleSetWeapons
    }
}

export const useMonsterHunterMonsters = () => {
    const [monsters, setMonsters] = useState([])
    
    const handleSetMonsters = (data) => {
        setMonsters(data)
    }


    return{
        monsters, handleSetMonsters
    }
}