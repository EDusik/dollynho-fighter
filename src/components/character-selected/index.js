import React from 'react';

import '../../App.css'
import './styles.css';

const CharacterSelected = ({activeCharacter}) => (
    <div className="centered full-width">
        <img src={activeCharacter.image} alt={activeCharacter.name}  />
    </div>     
);

export default CharacterSelected;
