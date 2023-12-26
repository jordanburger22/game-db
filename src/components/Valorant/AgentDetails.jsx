import { useParams } from "react-router-dom";
import { useValorantContext } from "../../context/ValorantProvider";


function AgentDetails() {

    const {agentName} = useParams()

    const {valorantAgentAPI: {agents}} = useValorantContext()

    const requestedAgent = agents.find(agent => agent.displayName === agentName)

    // console.log(requestedAgent)


    return ( 
        <div>
            <h1>{requestedAgent.displayName}</h1>
            <img src={requestedAgent.role.displayIcon} alt="" />
            <h2>{requestedAgent.role.displayName}</h2>
            <p>{requestedAgent.role.description}</p>

        </div>
     );
}

export default AgentDetails;