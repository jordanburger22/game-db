import React, { useState, useEffect } from 'react';
import { useValorantContext } from '../../context/ValorantProvider';
import { getValorantWeapons } from '../../http';
import { useParams } from 'react-router-dom';
import ControlledCarousel from './ControlledCarousel';


function WeaponDetails() {
    const { weaponName } = useParams();
    const { valorantWeaponAPI: { valorantWeapons, setValorantWeaponsList } } = useValorantContext();
    const requestedWeapon = valorantWeapons.find(weapon => weapon.displayName === weaponName);

    useEffect(() => {
        if (!requestedWeapon) {
            getValorantWeapons().then(res => {
                setValorantWeaponsList(res);
            });
        }
    }, [weaponName, requestedWeapon, setValorantWeaponsList]);

    if (!requestedWeapon) {
        return <div>Loading...</div>;
    }


    return (
        <div className='weapon-details-container'>

            <div className='weapon--details'>
                <div className='info-header'>
                    <h1>{requestedWeapon.displayName}</h1>
                    <img src={requestedWeapon.displayIcon} alt={requestedWeapon.displayName} />
                </div>

                <div>

                    <div className="info-section">
                        <h2>Shop Info</h2>
                        <p>Category: {requestedWeapon.shopData.category}</p>
                        <p>Price: {requestedWeapon.shopData.cost}</p>
                    </div>

                    <div className="info-section">
                        <h2>Weapon Stats</h2>
                        <p>Fire Rate: {requestedWeapon.weaponStats.fireRate}</p>
                        <p>Run Speed Multiplier: {requestedWeapon.weaponStats.runSpeedMultiplier}</p>
                        <p>Burst Count: {requestedWeapon.weaponStats.burstCount}</p>
                        <p>First Bullet Accuracy: {requestedWeapon.weaponStats.firstBulletAccuracy}</p>
                    </div>

                    {requestedWeapon.weaponStats.adsStats &&
                        <div className="info-section">
                            <h2>ADS Stats</h2>
                            {requestedWeapon.weaponStats.adsStats.zoomMultiplier && <p>Zoom Multiplier: {requestedWeapon.weaponStats.adsStats.zoomMultiplier}</p>}
                            <p>Fire Rate: {requestedWeapon.weaponStats.adsStats.fireRate}</p>
                            <p>Run Speed Multiplier: {requestedWeapon.weaponStats.adsStats.runSpeedMultiplier}</p>
                            {requestedWeapon.weaponStats.adsStats.burstCount && <p>Burst Count: {requestedWeapon.weaponStats.adsStats.burstCount}</p>}
                            <p>First Bullet Accuracy: {requestedWeapon.weaponStats.adsStats.firstBulletAccuracy}</p>
                        </div>}

                    <div className="info-section">
                        <h2>Damage Ranges</h2>
                        {requestedWeapon.weaponStats.damageRanges.map((range, index) => (
                            <div key={index}>
                                <p>
                                    Range: {range.rangeStartMeters} - {range.rangeEndMeters} meters,
                                    Body Damage: {range.bodyDamage},
                                    Head Damage: {range.headDamage},
                                    Leg Damage: {range.legDamage}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <ControlledCarousel requestedWeapon={requestedWeapon} />
        </div>
    );
}

export default WeaponDetails;


