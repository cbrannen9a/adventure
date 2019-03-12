import store from '../../../config/store';
import {
    SPRITE_SIZE,
    directions,
    playerActions
} from '../../../config/constants';

export default function handleMovement(player) {
    const getNewPosition = direction => {
        const oldPos = store.getState().player.position;
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

    const dispatchMove = direction => {
        store.dispatch({
            type: playerActions.MOVE_PLAYER,
            payload: {
                position: getNewPosition(direction)
            }
        });
    };

    const handleKeyDown = e => {
        e.preventDefault();

        switch (e.keyCode) {
            case 37:
                return dispatchMove(directions.WEST);

            case 38:
                return dispatchMove(directions.NORTH);

            case 39:
                return dispatchMove(directions.EAST);

            case 40:
                return dispatchMove(directions.SOUTH);

            default:
                console.log(e.keyCode);
        }
    };

    window.addEventListener('keydown', e => {
        handleKeyDown(e);
    });

    return player;
}
