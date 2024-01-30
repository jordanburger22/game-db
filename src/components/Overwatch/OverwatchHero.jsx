import { useNavigate } from "react-router-dom";

function OverwatchHero(props) {

    const {name, portrait,URI} = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/game/overwatch/heroes/${URI}`)
    }


    return (
        <div onClick={handleClick} className="overwatch--hero-card">
            <img src={portrait} alt="" />
            <h1>{name}</h1>
        </div>
    );
}

export default OverwatchHero;