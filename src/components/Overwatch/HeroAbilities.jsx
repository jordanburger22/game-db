

function HeroAbilities(props) {

    const {abilities} = props

    const abilityList = abilities.map(ability => {
        return (
            <div className="overwatch--ability-list">
                <h3>{ability.name}</h3>
                <img src={ability.icon} alt="" />
                <p>{ability.description}</p>
            </div>
        )
    })

    return (
        <div className="overwatch--hero-ability-div">
            {abilityList}
        </div>
    );
}

export default HeroAbilities;