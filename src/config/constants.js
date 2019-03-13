export const SPRITE_SIZE = 40;
export const MAP_SIZE = 50;
export const MAP_HEIGHT = SPRITE_SIZE * MAP_SIZE;
export const MAP_WIDTH = SPRITE_SIZE * MAP_SIZE;

//world builder variables
export const builder = {
    N_ITERATIONS: 4,
    discard: true,
    w_ratio: 0.45,
    h_ratio: 0.45
};

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
    MOVE_PLAYER: 'MOVE_PLAYER',
    SET_POS: 'SET_POS'
};

export const mapActions = {
    ADD_TILES: 'ADD_TILES'
};
