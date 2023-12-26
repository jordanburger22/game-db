import { Link } from "react-router-dom";


function AgentCard(props) {
    const { displayName,fullPortrait } = props
    console.log(props)
    return (
        <Link to={`/game/valorant/agents/${displayName}`}>
            <div>
                <h1>{displayName}</h1>
                <img src={fullPortrait} alt="" />
            </div>
        </Link>
    );
}

export default AgentCard;