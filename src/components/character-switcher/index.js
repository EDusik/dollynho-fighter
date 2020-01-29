import React from 'react';

const CharacterSwitcher = ({characters, toggleChar}) => (  
   
    <React.Fragment>
      {console.log('aaaaaaaaaaa', toggleChar)}
        {characters.map(character => (   
            <div key={character.id}>
                <div className="container row">
                    <div className="item" onClick={()=> toggleChar(character)}>
                        {<img src={character.image} />}
                    </div>
                </div>             
            </div>    
        ))}    
    </React.Fragment>
)

export default CharacterSwitcher;