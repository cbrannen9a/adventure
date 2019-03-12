import store from '../../../config/store';
import {
    SPRITE_SIZE,
    directions,
    playerActions,
    MAP_WIDTH,
    MAP_HEIGHT
} from '../../../config/constants';

export default function handleMovement(player) {
    const getNewPosition = (oldPos, direction) => {
        switch (direction) {
            case directions.WEST:
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case directions.EAST:
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case directions.NORTH:
                return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case directions.SOUTH:
                return [oldPos[0], oldPos[1] + SPRITE_SIZE];
            default:
                return [oldPos[0], oldPos[1]];
        }
    };

    const getSpriteLocation = (direction, walkIndex) => {
        switch (direction) {
            case directions.WEST:
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
            case directions.EAST:
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
            case directions.NORTH:
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
            case directions.SOUTH:
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
            default:
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
        }
    };

    const getWalkIndex = () => {
        const walkIndex = store.getState().player.walkIndex;
        return walkIndex >= 7 ? 0 : walkIndex + 1;
    };

    const observeBoundaries = newPos => {
        return (
            newPos[0] >= 0 &&
            newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
        );
    };

    const observeImpassable = newPos => {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;

        return tiles[y][x] < 5;
    };

    const dispatchMove = (direction, newPos) => {
        const walkIndex = getWalkIndex();
        store.dispatch({
            type: playerActions.MOVE_PLAYER,
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex)
            }
        });
    };

    const attemptMove = direction => {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);

        if (observeBoundaries(newPos) && observeImpassable(newPos)) {
            dispatchMove(direction, newPos);
        }
    };

    const handleKeyDown = e => {
        e.preventDefault();

        switch (e.keyCode) {
            case 37:
                return attemptMove(directions.WEST);

            case 38:
                return attemptMove(directions.NORTH);

            case 39:
                return attemptMove(directions.EAST);

            case 40:
                return attemptMove(directions.SOUTH);

            default:
                console.log(e.keyCode);
        }
    };

    window.addEventListener('keydown', e => {
        handleKeyDown(e);
    });

    return player;
}
