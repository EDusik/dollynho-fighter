import React from 'react';
import { connect } from 'react-redux';
import * as CharacterActions from '../../store/actions/character'
import { bindActionCreators } from 'redux';
import classes from './characters.css';

const Characters = ({characters, toggleCharacter}) => (
    <div>
        {characters.map(character => (   
            <div className={classes.CharBox} key={character.id}>
                <div className="container row">
                    <div className="item" onClick={() => toggleCharacter(character, character.name)}>
                        <img src={character.image} />
                    </div>
                </div>             
            </div>    
        ))}    
    </div>
)

const mapStateToProps = state => ({
    characters: state.characters
});

const mapDispatchToProps = dispatch => 
   bindActionCreators(CharacterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Characters);
