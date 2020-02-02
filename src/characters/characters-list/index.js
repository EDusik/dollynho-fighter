const CHARACTERS = {
    activeCharacter: {},
    characters: [
        { 
            id: 1, 
            name: 'Dollynho', 
            image: 'https://ffmkt.files.wordpress.com/2010/10/dollynho.jpg',
            movements: [
                { damage: 10, movement: 'Ficar amiguinho' },
                { damage: 10, movement: 'Beber muito líquido' },
            ]
        },
        { 
            id: 2, 
            name: 'Dollynho Pedreiro', 
            image: 'https://66.media.tumblr.com/0ebaa234d9fd82ff8948dda7ad3b009e/tumblr_o9l0rztGor1vwrrmio1_400.png',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        
        { 
            id: 3, 
            name: 'Dollynho Pedreiro', 
            image: 'https://66.media.tumblr.com/f3a27ed3591e5f8020ab34b5894b3edf/tumblr_o9l0u8xgBK1vwrrmio1_500.png',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        
        { 
            id: 5, 
            name: 'Dollynho Pedreiro', 
            image: 'https://i.pinimg.com/originals/95/fe/a2/95fea23022dacd62be05c1f27e6fd791.png',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        
        { 
            id: 6, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        
        { 
            id: 7, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        }
        ,
        { 
            id: 8, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 9, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 10, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 11, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 12, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 13, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 14, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 15, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 16, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 17, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        { 
            id: 19, 
            name: 'Dollynho Pedreiro', 
            image: 'https://pm1.narvii.com/6320/c012ee8a0ee1bdbae9a167ed219ece05fa157604_hq.jpg',
            movements: [
                { damage: 10, movement: 'Fazer reboco' },
                { damage: 10, movement: 'Procurar trinca ferro' },
            ]
        },
        
    ]
}

export default CHARACTERS;
