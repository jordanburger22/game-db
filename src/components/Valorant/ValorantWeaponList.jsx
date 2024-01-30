import React, { useState, useEffect } from 'react';
import { getValorantWeapons } from '../../http';
import { useValorantContext } from '../../context/ValorantProvider';
import ValorantWeaponCard from './ValorantWeaponCard';


function ValorantWeaponList() {

    const { valorantWeaponAPI: { valorantWeapons, setValorantWeaponsList } } = useValorantContext()


    useEffect(() => {
        getValorantWeapons().then(res => setValorantWeaponsList(res))
    }, [])

    const weaponList = valorantWeapons.map(weapon => {
        return (
            <ValorantWeaponCard
                {...weapon}
            />
        )
    })

    return (
        <div className='agent-card-list-flex'>
            <div className='weapon-card-list'>
                {weaponList}
            </div>
        </div>
    );
}

export default ValorantWeaponList;