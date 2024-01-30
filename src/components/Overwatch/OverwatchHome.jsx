import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function OverwatchHome() {


    const background = {
        backgroundImage: 'url(https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt393f71f8a8fe6baa/64d3e1b416380de7e430c3fd/OW2_2023_S6_Complete_Hero_Collectcion_BNET_enUS_BNET_App-Card_1920x1080.png)'
    }

    const mapBackground = {
        backgroundImage: 'url(https://images6.alphacoders.com/553/553471.jpg)'
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/game/overwatch/heroes')
    }

    const handleMapClick = () => {
        navigate('/game/overwatch/maps')
    }

    return (
        <div  className='overwatch--home'>
            <h1>Overwatch Home</h1>
            <div onClick={handleClick} style={background} className='overwatch--card'>
                <h1>Heroes</h1>
            </div>

            <div onClick={handleMapClick} style={mapBackground} className='overwatch--card'>
                <h1>Maps</h1>
            </div>
        </div>
    );
}

export default OverwatchHome;