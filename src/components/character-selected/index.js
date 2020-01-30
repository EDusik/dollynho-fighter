import React from 'react';

import '../../App.css'
import './styles.css';

const renderMovements = (activeCharacter) => {
    debugger
    if(activeCharacter.id) {
        return (         
            <ul>
                {activeCharacter.movements.map(char => (
                    <li>
                        {char.movement}
                    </li>
                ))}
            </ul>
        )
      
    }
}

const CharacterSelected = ({activeCharacter}) => (
    <div className="centered full-width">
        <h1>{activeCharacter.name}</h1>
        <img src={activeCharacter.image} alt={activeCharacter.name}  />
        { renderMovements(activeCharacter) }
    </div>     
);

export default CharacterSelected;
