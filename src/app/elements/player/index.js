import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import player_walk from './player_walk.png';
import handleMovement from './movement';

const Player = ({ position, spriteLocation }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: position[1],
                left: position[0],
                backgroundImage: `url('${player_walk}')`,
                backgroundPosition: spriteLocation,
                width: '40px',
                height: '40px'
            }}
        />
    );
};

Player.propTypes = {
    position: PropTypes.array.isRequired
};

Player.defaultProps = {
    position: [0, 0]
};

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(handleMovement(Player));
