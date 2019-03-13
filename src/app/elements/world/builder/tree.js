export class Tree {
    constructor(leaf) {
        this.leaf = leaf;
        this.lChild = undefined;
        this.rChild = undefined;
    }

    getLeafs = () => {
        if (this.lChild === undefined && this.rChild === undefined) {
            return [this.leaf];
        } else {
            return [].concat(this.lChild.getLeafs(), this.rChild.getLeafs());
        }
    };

    getLevel = (level, queue) => {
        if (queue === undefined) queue = [];
        if (level === 1) {
            queue.push(this);
        } else {
            if (this.lChild !== undefined)
                this.lChild.getLevel(level - 1, queue);
            if (this.rChild !== undefined)
                this.rChild.getLevel(level - 1, queue);
        }
        return queue;
    };
}
