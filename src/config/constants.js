export const SPRITE_SIZE = 40;

export const MAP_HEIGHT = SPRITE_SIZE * 12;
export const MAP_WIDTH = SPRITE_SIZE * 20;

export const directions = {
    NORTH: 'NORTH',
    EAST: 'EAST',
    SOUTH: 'SOUTH',
    WEST: 'WEST'
};

export const tileTypes = {
    GRASS: 'GRASS',
    ROCK: 'ROCK',
    TREE: 'TREE',
    CHEST: 'CHEST'
};

export const playerActions = {
    MOVE_PLAYER: 'MOVE_PLAYER'
};

export const mapActions = {
    ADD_TILES: 'ADD_TILES'
};
