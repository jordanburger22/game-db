import React, { useState, useEffect } from 'react';
import { getMonsterHunterMonsters } from "../../http";
import { useMonsterHunterContext } from '../../context/MonsterHunterProvider';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function MonsterHuntersMonsters() {

    const { monsterHunterMonstersAPI: { monsters, handleSetMonsters } } = useMonsterHunterContext()

    const [filterSpecies, setFilterSpecies] = useState('herbivore')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        getMonsterHunterMonsters().then(data => handleSetMonsters(data))
    }, [])

    const uniqueMonsterSpecies = new Set()


    monsters.forEach(monster => {
        const { species } = monster

        uniqueMonsterSpecies.add(species)
    })

    const uniqueTypesArray = Array.from(uniqueMonsterSpecies)

    const onButtonClick = (data) => {
        setFilterSpecies(data)
    }

    const buttonGroup = uniqueTypesArray.map((species, index) => {
        return <Button className='mhw--monster-button' key={index} onClick={() => onButtonClick(species)}>{species}</Button>
    })

    useEffect(() => {
        setFilteredData(monsters.filter(monster => monster.species === filterSpecies))
    }, [filterSpecies, monsters])

    if(uniqueTypesArray.length === 0){
        return <div className='mhw--loading-spinner'>
                <h1>Stampede...</h1>
                <Spinner animation="border" />
            </div>
    }


    const listElements = filteredData.map(monster => {
        return (
            <div className='mhw--monster-info'>
                <h1>{monster.name}</h1>
                <p>{monster.description}</p>
            </div>
        )
    })

    console.log(monsters)

    return (
        <div className='mhw--monster-home'>
            <h1>Monsters</h1>
            <div className='mhw--monster-btn-group'>{buttonGroup}</div>
            <div className='mhw--monster-list'>
                {listElements}
            </div>
        </div>
    );
}

export default MonsterHuntersMonsters;