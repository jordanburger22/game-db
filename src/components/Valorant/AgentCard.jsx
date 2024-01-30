import { Link, useNavigate } from "react-router-dom";


function AgentCard(props) {

    const { displayName, fullPortrait } = props
    console.log(props)
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/game/valorant/agents/${displayName}`)
    }

    return (
        <div onClick={handleClick} className="agent--card-div">
            <h1>{displayName}</h1>
            <img className="agent--card-img" src={fullPortrait} alt="" />
        </div>
    );
}

export default AgentCard;