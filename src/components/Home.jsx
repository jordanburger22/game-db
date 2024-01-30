import React, { useState } from 'react';
import { gameData } from '../gamesData';
import GameCard from './GameCard';


function Home() {

    const gameDataElements = gameData.map((data, index) => {
        return (
            <GameCard
                {...data}
                key={index}
            />
        )
    })


    return (
        <div className='home--container'>
            {gameDataElements}
        </div>
    );
}

export default Home;