import { useNavigate } from "react-router-dom";

function ChampionCard(props) {

    const {name, image} = props

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/game/league of legends/heroes/${name}`)
    }

    return (
        <div onClick={handleClick} className="league--champ-card">
            <h1>{name}</h1>
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${image.full}`}/>
        </div>
    );
}

export default ChampionCard
