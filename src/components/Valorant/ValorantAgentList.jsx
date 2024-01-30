import React, { useState, useEffect, useContext } from 'react';
import { getValorantAgents } from '../../http';
import { useValorantContext } from '../../context/ValorantProvider';
import AgentCard from './AgentCard';


function ValorantAgentList() {

    const { valorantAgentAPI: { agents, setAgentsList } } = useValorantContext()

    useEffect(() => {
        getValorantAgents().then(res => setAgentsList(res))
    }, [])

    const agentCards = agents.map(agent => {
        return (
            <AgentCard
                {...agent}
                key={agent.uuid}
            />
        )
    })

    console.log(agents)

    return (
        <div className='agent-card-list-flex'>

            <div className='agent-card-list'>
                {agentCards}
            </div>
        </div>
    );
}

export default ValorantAgentList;