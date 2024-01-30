import React from 'react';

const MHWWeaponDetailsComponent = ({ weapon }) => {
    const {
        name,
        type,
        attack,
        durability,
        crafting,
        elements,
        elderseal,
        assets,
    } = weapon;

    console.log(weapon)

    return (
        <div className='mhw--detail-container'>
            <div>
                <h1>{name}</h1>
                <h3>Type: {type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                <p>Attack: {attack.display} (Raw: {attack.raw})</p>

                {durability &&
                    <>
                        <h2>Durability</h2>
                        <ul>
                            {durability.map((level, index) => (
                                <li key={index}>
                                    Level {index + 1}: Red - {level.red}, Orange - {level.orange}, Yellow - {level.yellow}, Green - {level.green}, Blue - {level.blue}, White - {level.white}, Purple - {level.purple}
                                </li>
                            ))}
                        </ul>
                    </>
                }

                {elements && <>
                    <h2>Elements</h2>
                    <ul>
                        {elements.map((element, index) => (
                            <li key={index}>
                                Type: {element.type}, Damage: {element.damage}
                            </li>
                        ))}
                    </ul>
                </>
                }

                <h2>Crafting</h2>
                <p>Craftable: {crafting.craftable ? 'Yes' : 'No'}</p>
                {crafting.craftable && (
                    <div>
                        <p>Previous Weapon: {crafting.previous}</p>
                        <p>Branches: {crafting.branches.join(', ')}</p>
                        <h3>Crafting Materials</h3>
                        <ul>
                            {crafting.craftingMaterials.map((material, index) => (
                                <li key={index}>
                                    Quantity: {material.quantity}, Item: {material.item.name}
                                </li>
                            ))}
                        </ul>
                        <h3>Upgrade Materials</h3>
                        <ul>
                            {crafting.upgradeMaterials.map((material, index) => (
                                <li key={index}>
                                    Quantity: {material.quantity}, Item: {material.item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <h2>Elderseal</h2>
                <p>{elderseal ? elderseal : 'None'}</p>
            </div>

            {assets && (
                <div className='mhw--details-img-container'>
                    <img className='mhw--details-img' src={assets.image} alt={`${name} image`} />
                </div>
            )}
        </div>
    );
};

export default MHWWeaponDetailsComponent;
