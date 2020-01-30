import React from 'react';

const CharacterSwitcher = ({characters, toggleChar}) => (  
    <React.Fragment>
        {characters.map(character => (   
            <div key={character.id}>
                <div className="container row">
                    <div className="item" onClick={()=> toggleChar(character)}>
                        {<img src={character.image} alt={character.name} />}
                    </div>
                </div>             
            </div>    
        ))}    
    </React.Fragment>
)

export default CharacterSwitcher;
