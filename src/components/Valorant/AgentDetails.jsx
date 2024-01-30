import { useParams } from "react-router-dom";
import { useValorantContext } from "../../context/ValorantProvider";
import { getValorantAgents } from '../../http';
import React, { useState, useEffect } from 'react';

function AgentDetails() {
    const { valorantAgentAPI: { agents, setAgentsList } } = useValorantContext();
    const { agentName } = useParams();
    const requestedAgent = agents.find(agent => agent.displayName === agentName);

    useEffect(() => {
        if (!requestedAgent) {
            getValorantAgents().then(res => setAgentsList(res));
        }
    }, [agentName, requestedAgent, setAgentsList]);

    if (!requestedAgent) {
        return <div>Loading...</div>;
    }

    const abilities = requestedAgent.abilities.map((ability, index) => {
        return (
            <div className="ability-div" key={index}>
                <img src={ability.displayIcon} />
                <div>
                    <h3>{ability.slot}</h3>
                    <h4>{ability.displayName}</h4>
                    <p>{ability.description}</p>
                </div>
            </div>
        )
    })
    console.log(requestedAgent)

    const backgroundColors = requestedAgent.backgroundGradientColors.map(color => {
        return `#${color}`
    })


    const background = {
        background: `linear-gradient(50deg, ${backgroundColors})`
    }



    return (
        <div style={background} className="agent--details-container">
            <div className="agent--details-col1">

                <div className="agent--details-info">
                    <h1>{requestedAgent.displayName}</h1>
                    <div className="agent--details-info-child">
                        <img src={requestedAgent.killfeedPortrait} alt="" />
                        <p>{requestedAgent.description}</p>
                    </div>
                </div>
                <img className="agent--details-bust" src={requestedAgent.bustPortrait} alt="" />
            </div>
            <div className="agent--details-col2">
                <div className="agent--details-role">
                    <h2>{requestedAgent.role.displayName}</h2>
                    <div className="agent--details-role-child">
                        <img src={requestedAgent.role.displayIcon} alt="" />
                        <p>{requestedAgent.role.description}</p>
                    </div>
                </div>
                <div>
                    {abilities}
                </div>
            </div>
        </div>
    );
}

export default AgentDetails;
