import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleOverwatchHero } from '../../http';
import { useOverwatchContext } from '../../context/OverwatchProvider';
import HeroStory from './HeroStory';
import HeroAbilities from './HeroAbilities';


function HeroDetails() {

    const { overwatchHeroesAPI: { singleHero, handleSingleHero } } = useOverwatchContext()


    const { heroKey } = useParams()
    const { name, portrait, role, story, hitpoints, description, abilities, location } = singleHero

    if (!singleHero) {
        return <div>Loading...</div>
    }
    useEffect(() => {
        getSingleOverwatchHero(heroKey).then(res => handleSingleHero(res))
    }, [heroKey])
    
    console.log(singleHero)

    const capitilizedRole = role?.split('')[0].toUpperCase() + role?.split('').splice(1).join('')
    




    console.log(capitilizedRole)

    return (
        <div className='overwatch--hero-details'>
            <div className='overwatch-hero-details-flex'>

                <div>
                    <div className='overwatch--hero-info'>
                        <div>
                            <h1>{name}</h1>
                            <h3>{capitilizedRole}</h3>
                            <p>{location}</p>
                            <h4>{description}</h4>
                        </div>
                        <img src={portrait} />
                    </div>

                    {hitpoints &&
                        <div>
                            <p>Health: {hitpoints.health}</p>
                            {hitpoints.armor > 0 && <p>Armor: {hitpoints.armor}</p>}
                            {hitpoints.shields > 0 && <p>Shields: {hitpoints.shields}</p>}
                            {hitpoints.total > hitpoints.health && <p>Total: {hitpoints.total}</p>}
                        </div>
                    }
                </div>
                <div>
                    {abilities && <HeroAbilities
                        abilities={abilities}
                    />}
                </div>
            </div>

            {story && <HeroStory
                story={story}
            />}

        </div>
    );
}

export default HeroDetails;