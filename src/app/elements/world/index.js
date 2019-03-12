import React from 'react';
import Player from '../player';
import Map from '../map';

import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';
import { tiles } from '../../../data/maps/1';
import store from '../../../config/store';
import { mapActions } from '../../../config/constants';

const World = () => {
    store.dispatch({
        type: mapActions.ADD_TILES,
        payload: {
            tiles
        }
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
