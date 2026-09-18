class PathNode {
    constructor() {
        this.children = new Map(); // name -> PathNode
        this.val = -1;
    }
}

class FileSystem {
    constructor() {
        this.root = new PathNode();
    }

    /**
     * @param {string} path
     * @param {number} value
     * @return {boolean}
     */
    createPath(path, value) {
        // c(1)/abd(2)/def(3), c(1)/abd(2)/fff(5)
        let cur = this.root;
        let segments = path.split("/");
        let i = 1;

        while (i != segments.length - 1) {
            if (!cur.children.has(segments[i])) return false; // parent does not exist
            cur = cur.children.get(segments[i]);
            i++;
        }

        if (cur.children.has(segments[i])) return false; // path already exists

        cur.children.set(segments[i], new PathNode()); // create new path
        cur.children.get(segments[i]).val = value;
        return true;
    }

    /**
     * @param {string} path
     * @return {number}
     */
    get(path) {
        let cur = this.root;
        let segments = path.split("/");

        for (let i = 1; i < segments.length; i++) {
            if (!cur.children.has(segments[i])) {
                return -1;
            }
            cur = cur.children.get(segments[i]);
        }
        return cur.val;
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
