import { Container } from './container';
import { splitContainer } from './utils';
import { Room } from './room';

import { MAP_SIZE } from '../../../../config/constants';

export const getWorld = () => {
    let main = new Container(0, 0, MAP_SIZE, MAP_SIZE);
    let containerTree = splitContainer(main);
    return buildWorld(containerTree);
};

const setupWorld = () => {
    let world = [];
    for (let i = 0; i < MAP_SIZE; i++) {
        let row = [];
        row.length = MAP_SIZE;
        row.fill(5);
        world.push(row);
    }
    return world;
};

const buildWorld = container => {
    let world = setupWorld();
    buildRooms(container, world);
    buildPaths(container, world);

    return world;
};

const setupPaths = container => {
    return getPaths(container);
};

const getPaths = tree => {
    if (tree.lChild === undefined || tree.rChild === undefined) {
        return [];
    }
    let path = tree.lChild.leaf.drawPath(tree.rChild.leaf);
    return path.concat(getPaths(tree.lChild), getPaths(tree.rChild));
};

const buildPaths = (container, world) => {
    let paths = setupPaths(container);

    for (let point of paths) {
        try {
            world[point.y][point.x] = 0;
        } catch (err) {
            console.log(point);
        }
    }

    return world;
};

const setupRooms = container => {
    let rooms = [];
    let leaves = container.getLeafs();

    for (let i = 0; i < leaves.length; i++) {
        let room = new Room(leaves[i]);
        if (room) {
            rooms.push(room);
        }
    }
    return rooms;
};

const buildRooms = (container, world) => {
    let rooms = setupRooms(container);
    for (let room of rooms) {
        try {
            let endX = room.x + room.w;
            let endY = room.y + room.h;

            let objCode = 0;
            // Horizontal
            for (let x = room.x; x < endX; x++) {
                world[room.y][x] = objCode;
                world[endY][x] = objCode;
                //Vertical
                for (let y = room.y; y < endY; y++) {
                    world[y][x] = objCode;
                    world[y][x] = objCode;
                }
            }
        } catch (err) {
            console.log(room);
        }
    }
    return world;
};
