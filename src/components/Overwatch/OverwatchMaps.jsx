import React, { useState, useEffect } from 'react';
import { useOverwatchContext } from '../../context/OverwatchProvider';
import { getOverwatchMaps } from '../../http';
import MapCard from './MapCard';

function OverwatchMaps() {

    const {overwatchMapsAPI: {maps, handleSetMaps}} = useOverwatchContext()

    useEffect(() => {
        getOverwatchMaps().then(res => handleSetMaps(res))
    },[])

    const mapsList = maps.map((map, index) => {
        return(
            <MapCard 
                {...map}
                key={index}
            />
        )
    })
    return (
        <div className='overwatch--map-list'>
            {mapsList}
        </div>
    );
}

export default OverwatchMaps;