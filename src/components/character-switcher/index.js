import React from 'react';
import './styles.css';

const CharacterSwitcher = ({characters, char, toggleChar}) => (  
    <div className="container row">
        {characters.map(character => (   
            <div key={character.id}>
                <div className="item" onClick={()=> toggleChar(character)}>
                    {<img src={character.image} alt={character.name} className={`box-select colored-${char === character ? true : false }`} />}
                </div>
            </div>                
        ))}    
    </div>
)

export default CharacterSwitcher;
