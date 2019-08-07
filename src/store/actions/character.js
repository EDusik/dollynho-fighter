export function toggleCharacter(character, name)  {
    return {
        type: 'SELECT_CHARATER',
        character,
        name
    };
}
