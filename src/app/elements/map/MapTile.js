import React from 'react';
import { SPRITE_SIZE, tileTypes } from '../../../config/constants';
import './styles.css';

const getTileSprite = type => {
    switch (type) {
        case 0:
            return tileTypes.GRASS.toLowerCase();
        case 4:
            return tileTypes.CHEST.toLowerCase();
        case 5:
            return tileTypes.ROCK.toLowerCase();
        case 6:
            return tileTypes.TREE.toLowerCase();
        default:
            return tileTypes.GRASS.toLowerCase();
    }
};

const MapTile = ({ tile }) => {
    return (
        <div
            className={`tile ${getTileSprite(tile)}`}
            style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
        />
    );
};

export default MapTile;
