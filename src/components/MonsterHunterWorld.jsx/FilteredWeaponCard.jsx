import { useNavigate } from "react-router-dom";

function FilteredWeaponCard({ weapon }) {

    // Remove the last character if it's '1'
    const displayName = weapon.name.endsWith('1') ? weapon.name.slice(0, -1) : weapon.name;

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/game/monster hunter world/weapons/${weapon.type}/${displayName}`)
    }

    return (
        <div onClick={handleClick} className="mhw--weapon-name-card">
            {weapon.assets && <img src={weapon.assets.image} alt={displayName} />}
            <h1>{displayName}</h1>
        </div>
    );
}

export default FilteredWeaponCard;
