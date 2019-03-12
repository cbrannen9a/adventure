import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';
import MapRow from './MapRow';

const Map = ({ tiles }) => {
    return (
        <div
            style={{
                width: `${MAP_WIDTH}px`,
                height: `${MAP_HEIGHT}px`,
                border: '4px solid white',
                margin: '10px auto'
            }}
        >
            {tiles.map(row => (
                <MapRow key={uuidv4()} tiles={row} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tiles: state.map.tiles
    };
};

export default connect(mapStateToProps)(Map);
