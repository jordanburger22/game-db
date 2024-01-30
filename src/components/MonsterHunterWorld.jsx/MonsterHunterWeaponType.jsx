import { useParams } from "react-router-dom";
import { getMonsterHunterWorldWeapons } from '../../http';
import { useMonsterHunterContext } from '../../context/MonsterHunterProvider';
import WeaponCard from './WeaponCard';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import FilteredWeaponCard from "./FilteredWeaponCard";


function MonsterHunterWeaponType() {
    const { monsterHunterWeaponsAPI: { weapons, handleSetWeapons } } = useMonsterHunterContext();
    const { weaponType } = useParams();

    useEffect(() => {
        getMonsterHunterWorldWeapons().then(data => handleSetWeapons(data));
    }, [weaponType]);

    const uniqueWeaponNames = new Set();
    
    // Filter weapons by type and exclude versions 2 and 3
    const filteredArr = weapons.filter(weapon => {
        const simplifiedName = weapon.name.replace(/\s/g, '').toLowerCase();
        if (weapon.type === weaponType && !simplifiedName.includes('2') && !simplifiedName.includes('3') && !uniqueWeaponNames.has(simplifiedName)) {
            uniqueWeaponNames.add(simplifiedName);
            return true;
        }
        return false;
    });


    if(filteredArr.length === 0){
        return <div className='mhw--loading-spinner'>
                <h1>Theres a lot of weapons, one moment please.</h1>
                <Spinner animation="border" />
            </div>
    }

    const weaponCardList = filteredArr.map(weapon => {
        return (
            <FilteredWeaponCard 
                weapon = {weapon}
            />
        )
    })

    return (
        <div className="mhw--weapon-name-list">
            {weaponCardList}
        </div>
    );
}

export default MonsterHunterWeaponType;
