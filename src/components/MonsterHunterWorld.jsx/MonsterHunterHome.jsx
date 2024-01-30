import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MonsterHunterHome() {

    const navigate = useNavigate()


    const handleWeaponClick = () => {
        navigate('/game/monster hunter world/weapons')
    }
    const handleMonsterClick = () => {
        navigate('/game/monster hunter world/monsters')
    }


    return (
        <div className='mhw--home'>
            <h1 className='mhw--home-h1'>Monster Hunter World</h1>
            <div onClick={handleWeaponClick} className='mhw--nav-card' >
                <h1>Weapons</h1>
            </div>
            <div onClick={handleMonsterClick} className='mhw--nav-card'>
                <h1>Monsters</h1>
            </div>
        </div>
    )
}

export default MonsterHunterHome;