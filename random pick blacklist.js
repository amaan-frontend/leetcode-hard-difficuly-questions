class Solution {
    constructor(n, blacklist) {
        this.n = n;
        this.blacklist = new Set(blacklist);
        this.range = n - this.blacklist.size;
        this.mapping = {};

        for (let num of blacklist) {
            if (num < this.range) {
                while (this.blacklist.has(this.range - 1)) {
…        if (this.mapping[rand] !== undefined) {
            return this.mapping[rand];
        }
        return rand;
    }
}

