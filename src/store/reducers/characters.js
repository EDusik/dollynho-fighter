const CHARACTERS = {
    activeCharacter: {},
    characters: [
        { 
            id: 1, 
            name: 'Dollynho', 
            image: 'https://ffmkt.files.wordpress.com/2010/10/dollynho.jpg',
            movements: [
                { damage: 10, title: 'Ficar amiguinho' },
                { damage: 10, title: 'Beber muito líquido' },
            ]
        },
        { 
            id: 2, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, title: 'Fazer reboco' },
                { damage: 10, title: 'Procurar trinca ferro' },
            ]
        },
    ]
}

export default function character(state = CHARACTERS, action) {
    if (action.type === 'SELECT_CHARATER'){  debugger;
        return { ...state,
            activeCharacter: action.character, 
        };
    }
    return state;
}