import axios from 'axios'

export const getValorantAgents = async () => {
    try {
        const res = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}


export const getValorantWeapons = async () => {
    try {
        const res = await axios.get('https://valorant-api.com/v1/weapons')
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}


export const getOverwatchHeroes = async () => {
    try {
        const res = await axios.get('https://overfast-api.tekrop.fr/heroes?locale=en-us')
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const getSingleOverwatchHero = async (heroKey) => {
    try {
        const res = await axios.get(`https://overfast-api.tekrop.fr/heroes/${heroKey}?locale=en-us`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const getOverwatchMaps = async () => {
    try {
        const res = await axios.get('https://overfast-api.tekrop.fr/maps')
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const getLeagueInfo = async () => {
    try {
        const res = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json`)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

export const getSingleLeagueChampion = async (champName) => {
    try {
        const res = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${champName}.json`)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

export const getMonsterHunterWorldWeapons = async () => {
    try {
        const res = await axios.get("https://mhw-db.com/weapons")
        return res.data
    } catch (err) {
        console.log(err)
    }
}


export const getMonsterHunterMonsters = async () => {
    try {
        const res = await axios.get("https://mhw-db.com/monsters")
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const getValorantPlayerCards = async () => {
    try {
        const res = await axios.get('https://valorant-api.com/v1/playercards/3432dc3d-47da-4675-67ae-53adb1fdad5e')
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

export const getWeaponCard = async () => {
    try {
        const res = await axios.get('https://valorant-api.com/v1/playercards/fe84218f-4338-0f85-62cd-dfa5596576a0')
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}



//http://localhost:5173/game/monster%20hunter%20world/weapons/bow/Doom's%20Shaft