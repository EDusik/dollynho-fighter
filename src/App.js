import React, { Component } from 'react';

import * as char from './characters';
import CharacterSelected from './components/character-selected';
import CharacterSwitcher from './components/character-switcher';
import CharContext from './characters/context';
import Logo from './components/logo';

import './App.css';
class App extends Component {

  state = {
    characters: char.CHARACTERS.characters,
    character: char.CHARACTERS.activeCharacter
  };

  toggleChar = (character) => {
    this.setState({
      character: character
    })
  };

  render() {
    return (
      <div className="out-container">
        <Logo />
        <div className="in-container">
          <CharContext.Provider value={this.state}>
            <CharContext.Consumer>
              {char => 
                <CharacterSelected activeCharacter={this.state.character} />   
              }
            </CharContext.Consumer>
            <CharacterSwitcher characters={this.state.characters} char={this.state.character} toggleChar={this.toggleChar} />        
          </CharContext.Provider>
        </div> 
      </div>
    )
  }
}

export default App;

