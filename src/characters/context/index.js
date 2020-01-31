import React from 'react';
import CHARACTER from '../characters-list';

export default React.createContext({
    theme: CHARACTER.activeCharacter
});
