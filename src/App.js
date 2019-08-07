import React from 'react';
import { Provider } from 'react-redux';
import Characters from  './components/characters/characters'
import CharacterSelected from  './components/selected/selected'
import store from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CharacterSelected />
        <Characters />
      </Provider>
    </div>
  );
}

export default App;
