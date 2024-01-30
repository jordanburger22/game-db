import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    useValorantAgents,
    useValorantWeapons,
    useOverwatchHeroes,
    useOverwatchMaps,
    useLeagueHeroes,
    useMonsterHunterWeapons,
    useMonsterHunterMonsters,
} from '../hooks'
import {
    getMonsterHunterMonsters,
    getMonsterHunterWorldWeapons,
    getLeagueInfo,
    getOverwatchMaps,
    getOverwatchHeroes,
    getValorantWeapons,
    getValorantAgents,
} from '../http';

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSelectSuggestion = (selectedResult) => {
        setSelectedResult(selectedResult);
    };

    const resetSearchQuery = () => {
        setSearchQuery('')
    }

    // Use custom hooks
    const { agents, setAgentsList } = useValorantAgents();
    const { valorantWeapons, setValorantWeaponsList } = useValorantWeapons();
    const { overwatchHeroes, handleGetRequest } = useOverwatchHeroes();
    const { maps, handleSetMaps } = useOverwatchMaps();
    const { heros, handleSetHeros } = useLeagueHeroes();
    const { weapons, handleSetWeapons } = useMonsterHunterWeapons();
    const { monsters, handleSetMonsters } = useMonsterHunterMonsters();

    const allData = [
        ...agents,
        ...valorantWeapons,
        ...overwatchHeroes,
        ...maps,
        ...heros,
        ...weapons,
        ...monsters,
    ];

    console.log(allData)

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data and update state using your custom hooks
            try {
                const monstersData = await getMonsterHunterMonsters();
                const weaponsData = await getMonsterHunterWorldWeapons();
                const leagueData = await getLeagueInfo();
                const overwatchMapsData = await getOverwatchMaps();
                const overwatchHeroesData = await getOverwatchHeroes();
                const valorantWeaponsData = await getValorantWeapons();
                const valorantAgentsData = await getValorantAgents();



                const monstersWithTypeAndGame = monstersData.map(monster => ({
                    ...monster,
                    type: 'monster',
                    game: 'Monster Hunter World',
                }));
                handleSetMonsters(monstersWithTypeAndGame);

                const weaponsWithTypeAndGame = weaponsData.map(weapon => ({
                    ...weapon,
                    weaponType: weapon.type,
                    type: 'weapon',
                    game: 'Monster Hunter World',
                }));

                const uniqueWeaponNames = new Set();
                const filteredArr = weaponsWithTypeAndGame.filter(weapon => {
                    const simplifiedName = weapon.name.replace(/\s/g, '').toLowerCase();
                    if (!simplifiedName.includes('2') && !simplifiedName.includes('3') && !uniqueWeaponNames.has(simplifiedName)) {
                        uniqueWeaponNames.add(simplifiedName);
                        return true;
                    }
                    return false;
                });

                const weaponData = filteredArr.map(weapon => weapon.name.endsWith('1') ? { ...weapon, name: weapon.name.slice(0, -1) } : weapon)
                handleSetWeapons(weaponData);

                const heroesWithTypeAndGame = Object.values(leagueData).map(hero => ({
                    ...hero,
                    type: 'hero',
                    game: 'League Of Legends',
                }));
                handleSetHeros(heroesWithTypeAndGame);

                const mapsWithTypeAndGame = overwatchMapsData.map(map => ({
                    ...map,
                    type: 'map',
                    game: 'Overwatch',
                }));
                handleSetMaps(mapsWithTypeAndGame);

                const heroesWithTypeAndGameOverwatch = overwatchHeroesData.map(hero => ({
                    ...hero,
                    type: 'hero',
                    game: 'Overwatch',
                }));
                handleGetRequest(heroesWithTypeAndGameOverwatch);

                const weaponsWithTypeAndGameValorant = valorantWeaponsData.map(weapon => ({
                    ...weapon,
                    type: 'weapon',
                    game: 'Valorant',
                }));
                setValorantWeaponsList(weaponsWithTypeAndGameValorant);

                const agentsWithTypeAndGame = valorantAgentsData.map(agent => ({
                    ...agent,
                    type: 'agent',
                    game: 'Valorant',
                    name: agent.displayName
                }));
                setAgentsList(agentsWithTypeAndGame);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const lowercaseQuery = searchQuery.toLowerCase();

        if (lowercaseQuery.length >= 2) {

            const exactMatches = allData.filter(obj =>
                (obj.name && typeof obj.name === 'string' && obj.name.toLowerCase() === lowercaseQuery)
            );

            const suggestions = allData
                .filter(obj =>
                    (obj.name && typeof obj.name === 'string' && obj.name.toLowerCase().includes(lowercaseQuery))
                )
                .slice(0, 5);

            const combinedResultsSet = new Set([...exactMatches, ...suggestions]);
            const combinedResults = Array.from(combinedResultsSet);

            setSearchResults(combinedResults);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);


    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };



    return (
        <SearchContext.Provider value={{ allData, resetSearchQuery, searchQuery, updateSearchQuery, searchResults, selectedResult, handleSelectSuggestion }}>
            {children}
        </SearchContext.Provider>
    )
}
//correct
//http://localhost:5173/game/monster%20hunter%20world/weapons/great-sword/Buster%20Sword

//incorrect
//http://localhost:5173/game/monster%20hunter%20world/weapons/great-sword/buster%20sword%20