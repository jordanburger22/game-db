import { useNavigate } from "react-router-dom";


function LeagueHome() {



    const heroBackground = {
        backgroundImage: 'url(https://wallpapercave.com/wp/br99oT4.jpg)'
    }

    const navigate = useNavigate()

    const handleHeroClick = () => {
        navigate('/game/league of legends/heroes')
    }

    return ( 
        <div className="league--home">
            <div onClick={handleHeroClick} className="league--home-nav" style={heroBackground}>
                <h1>Heroes</h1>
            </div>
        </div>
     );
}

export default LeagueHome;