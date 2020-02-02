import React from 'react';

import '../../App.css'
import './styles.css';

const renderMovements = (activeCharacter) => {
    if (activeCharacter.id) {
        return (     
            <div>
                <ul className="left">
                    {activeCharacter.movements.map(char => (
                        <li key={char.movement}>
                            <span>{char.movement}</span>
                        </li>
                    ))}
                </ul>
            </div>    
        )
    }
}

const CharacterSelected = ({activeCharacter}) => {
    if (!activeCharacter.id) {
        return ( 
            <div className="full-width height-70">
                 <h1>Selecione um personagem</h1>
            </div>
        )
    } else {
        return (  
            <div className="centered full-width height-70">  
                <h1>{activeCharacter.name}</h1>
                <div className="grid">
                    <div>
                        <img className="right dolly-selected" src={activeCharacter.image} alt={activeCharacter.name}  />
                    </div>
                    { renderMovements(activeCharacter) }
                </div>
            </div> 
        )
    }        
}

export default CharacterSelected;
