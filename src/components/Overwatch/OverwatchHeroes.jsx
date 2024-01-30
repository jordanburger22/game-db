import React, { useState, useEffect } from 'react';
import { getOverwatchHeroes } from '../../http';
import { useOverwatchContext } from '../../context/OverwatchProvider';
import OverwatchHero from './OverwatchHero';

function OverwatchHeroes() {

    const {overwatchHeroesAPI: {handleGetRequest, overwatchHeroes}} = useOverwatchContext()

    useEffect(() => {
        getOverwatchHeroes().then(res => handleGetRequest(res))
    },[])

    const heroList = overwatchHeroes.map(hero => {
        return(
            <OverwatchHero 
                {...hero}
                key={hero.key}
                URI = {hero.key}
            />
        )
    })
    if(!overwatchHeroes){
        return <div>Loading...</div>
    }

    return (
        <div className='overwatch--hero-list'>
            {heroList}
        </div>
    );
}
export default OverwatchHeroes;