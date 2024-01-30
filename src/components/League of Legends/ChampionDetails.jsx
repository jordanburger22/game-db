import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLeagueContext } from '../../context/LeagueProvider';
import { getSingleLeagueChampion } from '../../http';

function ChampionDetails() {
    const { champName } = useParams();
    const { leagueHeroesAPI: { requestedChampion, handleSetRequestedChampion } } = useLeagueContext();

    const specialCases = {
        "Nunu & Willump": "Nunu",
        "Bel'Veth": "Belveth",
        "Cho'Gath": "Chogath",
        "Dr. Mundo": "DrMundo",
        "Kai'Sa": "Kaisa",
        "Kha'Zix": "Khazix",
        "Kog'Maw": "KogMaw",
        "K'Sante": "KSante",
        "Rek'Sai": "RekSai"
    };

    const requestName = specialCases[champName] || champName.split(' ').join('');

    useEffect(() => {
        getSingleLeagueChampion(requestName).then(data => handleSetRequestedChampion(data))
    }, [champName])

    const championData = requestedChampion[requestName];

    if (!championData) {
        return <div>Loading...</div>
    }

    return (
        <div className='champ--detail'>
            <div className='champion--detail-header'>
                <div className='champion--detail-section'>
                    <div className='champion--detail-img-div'>
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championData.image.full}`}
                            alt={championData.name}
                        />
                        <div>
                            <h1>{championData.name}</h1>
                            <h1>{championData.title.charAt(0).toUpperCase() + championData.title.slice(1)}</h1>
                        </div>
                    </div>

                    <p>{championData.lore}</p>

                    <h2>Ally Tips:</h2>
                    <ul>
                        {championData.allytips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>

                    <h2>Enemy Tips:</h2>
                    <ul>
                        {championData.enemytips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                    <h2>Skins:</h2>
                    <ul>
                        {championData.skins.map((skin, index) => (
                            <li key={index}>{skin.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='champion--detail-section'>
                    <h2>Abilities:</h2>
                    {championData.spells.map((spell, index) => (
                        <div key={index}>
                            <h3>{spell.name}</h3>
                            <p>{spell.description}</p>
                            <p>Cooldown: {spell.cooldownBurn}</p>
                            <p>Range: {spell.rangeBurn}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ChampionDetails;
