import { playerActions, directions } from '../../../config/constants';

const initialState = {
    position: [0, 0],
    spriteLocation: '0px 0px',
    direction: directions.EAST,
    walkIndex: 0
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case playerActions.MOVE_PLAYER:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default player;
