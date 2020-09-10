import React from 'react';

import { StyledCharacterSwitcher } from '../../styles/StyledCharacterSwitcher';

const CharacterSwitcher = ({characters, char, toggleChar}) => (  
    <StyledCharacterSwitcher>
        <div className="bg-selected">
            <div className="container row">
                {characters.map(character => (  
                    <div key={character.id}>
                        {console.log(character.image)}
                        <div className="item" onClick={()=> toggleChar(character)}>
                        {<img src={process.env.PUBLIC_URL + character.feature} alt={character.name} className={`box-select colored-${char === character ? true : false }`} />}
                        </div>
                    </div>                
                ))}    
            </div> 
        </div>
    </StyledCharacterSwitcher>
)

export default CharacterSwitcher;
