
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill().map((_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
…            const root = uf.find(node);
            groups.set(root, (groups.get(root) || 0) + 1);
        }
        for (const size of groups.values()) {
            goodPaths += Math.floor(size * (size + 1) / 2);
        }
    }
    return goodPaths;
};
