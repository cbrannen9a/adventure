import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import MapRow from './MapRow';

const Map = ({ tiles }) => {
    return (
        <div
            style={{
                width: '800px',
                height: '480px',
                backgroundColor: 'green',
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
