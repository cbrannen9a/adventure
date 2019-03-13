import { Point } from './point';
export class Container {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.center = new Point(
            (this.x + this.w / 2).toFixed(0),
            (this.y + this.h / 2).toFixed(0)
        );
    }

    drawPath = container => {
        let path = [];
        // Travel along x axis
        if (this.center.x !== container.center.x) {
            for (let i = parseInt(this.center.x); i < container.center.x; i++) {
                path.push(new Point(i, parseInt(this.center.y)));
            }
        }
        // Travel along y axis
        if (this.center.y !== container.center.y) {
            for (let i = parseInt(this.center.y); i < container.center.y; i++) {
                path.push(new Point(parseInt(this.center.x), i));
            }
        }
        return path;
    };
}
