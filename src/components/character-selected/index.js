import React from 'react';

const CharacterSelected = ({activeCharacter}) => (
    <div>
        {<img src={activeCharacter.image} alt={activeCharacter.name} />}
    </div>  
);

export default CharacterSelected;
