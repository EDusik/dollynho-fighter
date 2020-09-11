import React from 'react';

import '../../App.css'
import './styles.scss';
import { StyledCharacterSelected } from '../../styles/StyledCharacterSelected';

const renderMovements = (activeCharacter) => {
    if (activeCharacter.id) {
        return (     
            <div>
                <ul className="left">
                    <h2>{activeCharacter.name}</h2>
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
            <StyledCharacterSelected>
                <div className="full-width">
                    <h1>Selecione um Dollynho</h1>
                </div>
            </StyledCharacterSelected>
        )
    } else {
    
        return (
            <StyledCharacterSelected>
            <div className="centered full-width">  
             
                <div className="grid">
                    <div>             
                        <img className="right dolly-selected" src={process.env.PUBLIC_URL  + activeCharacter.frame} alt={activeCharacter.name}  />
                    </div>
                    { renderMovements(activeCharacter) }
                </div>
            </div> 
            </StyledCharacterSelected>
        )
    }        
}

export default CharacterSelected;
