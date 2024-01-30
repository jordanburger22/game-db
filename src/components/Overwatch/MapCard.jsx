import Card from 'react-bootstrap/Card';


function MapCard(props) {
    const { screenshot, name, location, gamemodes, country_code } = props


    let gamemode = gamemodes[0];

    gamemode = gamemode.charAt(0).toUpperCase() + gamemode.slice(1);

    console.log(gamemode);

    return (

        <div className='overwatch--map-card'>
            <h1>{name}</h1>
            <h3>{gamemode}</h3>
            <img className='overwatch--map-card-img' src={screenshot} />
            <h5>{location} {country_code}</h5>
        </div>

    );
}

export default MapCard;