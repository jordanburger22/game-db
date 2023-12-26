import { Link } from "react-router-dom";

function GameCard(props) {

    const { name, imgUrl } = props

    return (
        <>
            <Link to={`/game/${name.toLowerCase()}`}>
                <h1>{name}</h1>
                <img src={imgUrl} />
            </Link>
        </>
    );
}

export default GameCard;