import { getMonsterHunterWorldWeapons } from '../../http';
import { useMonsterHunterContext } from '../../context/MonsterHunterProvider';
import WeaponCard from './WeaponCard';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';


function MonsterHunterWeaponsHome() {
    const { monsterHunterWeaponsAPI: { weapons, handleSetWeapons } } = useMonsterHunterContext()

    useEffect(() => {
        getMonsterHunterWorldWeapons().then(data => handleSetWeapons(data))
    }, [])



    const uniqueWeaponTypes = new Set()

    weapons.forEach(weapon => {
        const {type} = weapon

        uniqueWeaponTypes.add(type)
    })

    const uniqueTypesArray = Array.from(uniqueWeaponTypes)



    const weaponElements = uniqueTypesArray.map((type, index) => {
        return (
            <WeaponCard type = {type} key = {index}/>
        )
    })

    if(uniqueTypesArray.length === 0){
        return <div className='mhw--loading-spinner'>
                <h1>Theres a lot of weapons, one moment please.</h1>
                <Spinner animation="border" />
            </div>
    }

    return (
        <div className='mhw--card-list'>
            {weaponElements}
        </div>
    );
}

export default MonsterHunterWeaponsHome;