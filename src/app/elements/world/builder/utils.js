import { Tree } from './tree';
import { Container } from './container';
import { builder } from '../../../../config/constants';

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const splitContainer = (container, iter = builder.N_ITERATIONS) => {
    let root = new Tree(container);
    if (iter !== 0) {
        let split = randomSplit(container);
        root.lChild = splitContainer(split[0], iter - 1);
        root.rChild = splitContainer(split[1], iter - 1);
    }
    return root;
};

export const randomSplit = container => {
    let r1, r2;
    if (random(0, 1) === 0) {
        // Vertical
        r1 = new Container(
            container.x,
            container.y, // r1.x, r1.y
            random(1, container.w),
            container.h // r1.w, r1.h
        );
        r2 = new Container(
            container.x + r1.w,
            container.y, // r2.x, r2.y
            container.w - r1.w,
            container.h // r2.w, r2.h
        );
        if (builder.discard) {
            var r1_w_ratio = r1.w / r1.h;
            var r2_w_ratio = r2.w / r2.h;
            if (r1_w_ratio < builder.w_ratio || r2_w_ratio < builder.w_ratio) {
                return randomSplit(container);
            }
        }
    } else {
        // Horizontal
        r1 = new Container(
            container.x,
            container.y, // r1.x, r1.y
            container.w,
            random(1, container.h) // r1.w, r1.h
        );
        r2 = new Container(
            container.x,
            container.y + r1.h, // r2.x, r2.y
            container.w,
            container.h - r1.h // r2.w, r2.h
        );
        if (builder.discard) {
            var r1_h_ratio = r1.h / r1.w;
            var r2_h_ratio = r2.h / r2.w;
            if (r1_h_ratio < builder.h_ratio || r2_h_ratio < builder.h_ratio) {
                return randomSplit(container);
            }
        }
    }
    return [r1, r2];
};
