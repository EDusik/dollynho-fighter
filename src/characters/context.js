import React from 'react';
import CHARACTER from './characters';

export default React.createContext({
    theme: CHARACTER.activeCharacter
});
