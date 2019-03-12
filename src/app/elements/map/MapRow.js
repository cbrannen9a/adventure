import React from 'react';

import uuidv4 from 'uuid/v4';

import MapTile from './MapTile';
import { SPRITE_SIZE } from '../../../config/constants';

const MapRow = ({ tiles }) => {
    return (
        <div
            className='row'
            style={{
                height: SPRITE_SIZE
            }}
        >
            {tiles.map(tile => (
                <MapTile key={uuidv4()} tile={tile} />
            ))}
        </div>
    );
};

export default MapRow;
