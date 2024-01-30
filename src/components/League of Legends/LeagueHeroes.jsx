import React, { useState, useEffect } from 'react';
import { useLeagueContext } from '../../context/LeagueProvider';
import { getLeagueInfo } from '../../http';
import ChampionCard from './ChampionCard';

function LeagueHeroes() {

    const {leagueHeroesAPI: {heros, handleSetHeros}} = useLeagueContext()
    
    useEffect(() => {
        getLeagueInfo().then(data => handleSetHeros(data))
    },[])

    const championsArray = Object.values(heros)

    const champoionsElements = championsArray.map(champ => {
        return (
            <ChampionCard 
                {...champ}
                key={champ.id}
            />
        )
    }) 

    return ( 
        <div className='league--champion-list'>
            {champoionsElements}
        </div>
     );
}

export default LeagueHeroes;