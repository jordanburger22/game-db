import { useNavigate } from "react-router-dom";


function WeaponCard({type}) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/game/monster hunter world/weapons/${type}`)
    }


    return (
        <div onClick={handleClick} className="mhw--card">
            <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        </div>
    );
}

export default WeaponCard;