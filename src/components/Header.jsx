import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';

function Header() {
    const navigate = useNavigate();
    const { allData, searchQuery, updateSearchQuery, searchResults, resetSearchQuery } = useSearchContext();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform any additional search-related logic here if needed
    };

    const handleSelectSuggestion = (selectedResult) => {
        // Handle the selected suggestion, e.g., update the search query
        updateSearchQuery(selectedResult.name);

        const { type, game, name, displayName, weaponType } = selectedResult;
        let routePath = `/game/${game.toLowerCase()}`;

        if (type === 'agent') {
            routePath += '/agents';
        } else if (type === 'weapon') {
            routePath += '/weapons';
        } else if (type === 'hero') {
            routePath += '/heroes';
        } else if (type === 'map') {
            routePath += '/maps'
        }

        if (game === 'Overwatch' && type === 'hero') {
            routePath += `/${encodeURIComponent(name.trim().toLowerCase() || displayName.trim())}`
        } else if (game === 'Monster Hunter World') {
            // Normalize weapon type and name for Monster Hunter World route
            const normalizedWeaponType = weaponType.trim().toLowerCase();
            const normalizedName = name.trim();

            routePath += `/${normalizedWeaponType}/${encodeURIComponent(normalizedName)}`
        } else if (type !== 'map') {
            routePath += `/${encodeURIComponent(name.trim() || displayName.trim())}`;
        }

        // Navigate to the constructed route path
        navigate(routePath);
        resetSearchQuery()
    };



    return (
        <nav className="header">
            <h1>Game DB</h1>
            {
                allData.length > 1000 ?
                    <form onSubmit={handleSearch} >
                        <input
                            name="search"
                            value={searchQuery}
                            placeholder="Looking for something?"
                            onChange={(e) => updateSearchQuery(e.target.value)}
                            type="text"
                            className='search--input'
                            autocomplete="off"
                        />

                        <Dropdown show={searchResults.length > 0}>
                            {false && <Dropdown.Toggle variant="secondary" id="search-dropdown">

                            </Dropdown.Toggle>}

                            <Dropdown.Menu className='search--dropdown'>
                                {searchResults.slice(0, 5).map((result, index) => (
                                    <Dropdown.Item
                                        key={index}
                                        onClick={() => handleSelectSuggestion(result)}
                                        className='search--item'
                                    >
                                        {result.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>


                    </form>
                    :
                    <div className='search--spinner'>
                        <h4>Collecting Data...</h4>
                        <Spinner animation="border" />
                    </div>
            }

            <div className="header--buttons-div">
                <Button variant="primary" onClick={() => navigate('/')}>
                    Home
                </Button>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Games
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/game/valorant")}>Valorant</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/game/overwatch")}>Overwatch</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/game/league of legends")}>League of Legends</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/game/monster hunter world")}>Monster Hunter World</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button variant="primary" onClick={handleGoBack}>
                    Back
                </Button>
            </div>
        </nav>
    );
}

export default Header;

//http://localhost:5173/game/monster%20hunter%20world/weapons/great-sword/buster%20sword%201

//http://localhost:5173/game/monster%20hunter%20world/weapons/great-sword/Buster%20Sword