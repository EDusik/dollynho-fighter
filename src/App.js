import React, { Component } from 'react';

import * as char from './characters';
import CharacterSelected from './components/character-selected';
import CharacterSwitcher from './components/character-switcher';
import CharContext from './characters/context';

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
      <>
        <CharContext.Provider value={this.state}>
          <CharacterSwitcher characters={this.state.characters} toggleChar={this.toggleChar} />
            <CharContext.Consumer>
              {char => 
                  <CharacterSelected character={char} />   
              }
            </CharContext.Consumer>        
        </CharContext.Provider>
      </>
    )
  }
}

export default App;

