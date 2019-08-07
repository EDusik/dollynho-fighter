import React from 'react';
import { connect } from 'react-redux';
import classes from './selected.css';

const CharacterSelected = ({activeCharacter}) => (
    <div>
        <img src={activeCharacter.image} />
    </div>
  
);

export default connect(state =>  ({
    activeCharacter: state.activeCharacter
}))(CharacterSelected);
