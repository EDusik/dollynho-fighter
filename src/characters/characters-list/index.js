const CHARACTERS = {
    activeCharacter: {},
    characters: [
        {
            id: 1,
            name: 'Dolly Metal',
            frame: '/images/characters/frame/frame-blackmetal.png',
            feature: '/images/characters/features/feature-blackmetal.png',
            movements: [
                { damage: 20, movement: 'Imitar Gatu Felix' },
                { damage: 10, movement: 'Iscutar Metau' }
            ]
        },
        {
            id: 2,
            name: 'Dolly Baby',
            frame: '/images/characters/frame/frame-dollybebe.png',
            feature: '/images/characters/features/feature-dollybebe.png',
            movements: [
                { damage: 3, movement: 'Xorar' },
                { damage: 1, movement: 'Beber muinto leitchê' }
            ]
        }
     ]
}

export default CHARACTERS;
