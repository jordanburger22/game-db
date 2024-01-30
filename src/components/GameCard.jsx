import { useNavigate } from "react-router-dom";

function GameCard(props) {

    const { name, imgUrl } = props

    const background = {
        backgroundImage: `url(${imgUrl})`
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/game/${name.toLowerCase()}`)
    }

    return (
        <div style={background} className="game-card" onClick={handleClick}>
        </div>

    );
}

export default GameCard;