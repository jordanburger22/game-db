import React, { useState } from 'react';


export const useValorantAgents = () =>{
    const [agents, setAgents] = useState([])

    const setAgentsList = (data) => {
        setAgents(data)
    }

    return {
        agents, setAgentsList
    }
}