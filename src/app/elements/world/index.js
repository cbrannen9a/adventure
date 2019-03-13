import React from 'react';
import Player from '../player';
import Map from '../map';

import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';
import store from '../../../config/store';
import { mapActions, playerActions } from '../../../config/constants';
import { getWorld } from './builder/builder';
import { getSafeStartingPos } from '../player/position';

const World = () => {
    let world = getWorld();
    store.dispatch({
        type: mapActions.ADD_TILES,
        payload: {
            tiles: world
        }
    });
    store.dispatch({
        type: playerActions.SET_POS,
        position: getSafeStartingPos()
    });

    return (
        <div
            style={{
                position: 'relative',
                width: `${MAP_WIDTH}px`,
                height: `${MAP_HEIGHT}px`,
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    );
};

export default World;
