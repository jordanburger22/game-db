import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ValorantWeaponCard(props) {

    const navigate = useNavigate()

    const {displayName, displayIcon} = props

    const handleClick = () => {
        navigate(`/game/valorant/weapons/${displayName}`)
    }

    return (
        <div onClick={handleClick} className='valorant--weapon-link'>
            <img src={displayIcon} alt="" />
            <h1>{displayName}</h1>
        </div>
    );
}

export default ValorantWeaponCard;