import React from 'react';
import CHARACTER from '../characters-list';

export default React.createContext({
    character: CHARACTER.activeCharacter
});
