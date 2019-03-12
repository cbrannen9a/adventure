const initialState = {
    position: [0, 0]
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default player;
