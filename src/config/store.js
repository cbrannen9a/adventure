import { createStore, combineReducers } from 'redux';
import player from '../app/elements/player/reducer';

const rootReducer = combineReducers({
    player
});

const store = createStore(
    rootReducer,
    ...(process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
        : [])
);

export default store;
