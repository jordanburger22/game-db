import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getValorantPlayerCards, getWeaponCard } from '../../http';
import { useValorantPlayerCards } from '../../hooks';


function ValorantHome() {

    const navigate = useNavigate()

    const {
        agentPlayerCard,
        handleSetAgentPlayerCard,
        weaponCard,
        handleSetWeaponCard
    } = useValorantPlayerCards()

    const handleAgentClick = () => {
        navigate('/game/valorant/agents')
    }

    const handleWeaponClick = () => {
        navigate('/game/valorant/weapons')
    }

    useEffect(() => {
        getValorantPlayerCards().then(res => handleSetAgentPlayerCard(res))
        getWeaponCard().then(res => handleSetWeaponCard(res))
    }, [])

    console.log(agentPlayerCard)

    const agentBackground = {
        backgroundImage: `url(${agentPlayerCard.largeArt})`,
    };

    const weaponBackground = {
        backgroundImage: `url(${weaponCard.largeArt})`,
    };



    return (
        <div className='valorant--home'>

            <div className='valorant--home-div'>
                <div style={agentBackground} className='valorant--home-nav' onClick={handleAgentClick}>
                    <h1>Agents</h1>
                </div>

                <div style={weaponBackground} className='valorant--home-nav' onClick={handleWeaponClick}>
                    <h1>Weapons</h1>
                </div>
            </div>

        </div>
    );
}

export default ValorantHome;