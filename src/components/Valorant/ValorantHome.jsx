import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ValorantHome() {
    return (
        <>
            <h1>Valorant Home</h1>

            <Link to='/game/valorant/agents'>
                <div>
                    <h1>Agents</h1>
                </div>
            </Link>
        </>
    );
}

export default ValorantHome;