import { useParams } from "react-router-dom";
import { getMonsterHunterWorldWeapons } from '../../http';
import { useMonsterHunterContext } from '../../context/MonsterHunterProvider';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import MHWWeaponDetailsComponent from "./MHWWeaponDetailsComponent";

function MHWWeaponDetails() {
    const { weaponType, weaponName } = useParams();
    const { monsterHunterWeaponsAPI: { weapons, handleSetWeapons } } = useMonsterHunterContext();

    useEffect(() => {
        getMonsterHunterWorldWeapons().then(data => handleSetWeapons(data));
    }, []);

    const requestedWeapons = weapons.filter(weapon => weapon.name.includes(weaponName));

    const displayName = requestedWeapons[0]?.name.endsWith('1') ? requestedWeapons[0].name.slice(0, -1) : requestedWeapons[0]?.name;


    const detailData = requestedWeapons.map(weapon => (
        <MHWWeaponDetailsComponent
            key={weapon.id}
            weapon={weapon}
        />
    ));

    if(requestedWeapons.length === 0){
        return <div className='mhw--loading-spinner'>
                <h1>Grabbing your weapon...</h1>
                <Spinner animation="border" />
            </div>
    }

    return (
        <div className="mhw--details-home">
            {requestedWeapons.length > 1 && <h1>{displayName}</h1>}
            {detailData}
        </div>
    );
}

export default MHWWeaponDetails;
