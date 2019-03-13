import store from '../../../config/store';
import { MAP_SIZE, SPRITE_SIZE } from '../../../config/constants';

export const getSafeStartingPos = () => {
    const tiles = store.getState().map.tiles;
    for (let x = 0; x < MAP_SIZE; x++) {
        for (let y = 0; y <= x; y++) {
            if (tiles[y][x] === 0) {
                return [x * SPRITE_SIZE, y * SPRITE_SIZE];
            }
        }
    }
    return [0, 0];
};
