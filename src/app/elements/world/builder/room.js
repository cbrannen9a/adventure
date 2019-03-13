import { random } from './utils';

export class Room {
    constructor(container) {
        this.makeRoom(container);
    }

    makeRoom = container => {
        this.x = container.x + random(0, Math.floor(container.w / 3));
        this.y = container.y + random(0, Math.floor(container.h / 3));
        this.w = container.w - (this.x - container.x) - 1;
        this.h = container.h - (this.y - container.y) - 1;
        this.w -= random(0, this.w / 3);
        this.h -= random(0, this.h / 3);

        if (this.x < 1 || this.y < 1 || this.w < 1 || this.h < 1) {
            return null;
        }
    };
}
