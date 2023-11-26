class BuildingPoint {
    constructor(x, isStart, height) {
        this.x = x;
        this.isStart = isStart;
        this.height = height;
    }

    compareTo(other) {
        if (this.x !== other.x) {
            return this.x - other.x;
        } else {
            return (this.isStart ? -this.height : this.height) - (other.isStart ? -other.height : other.height);
        }
    }
}

var getSkyline = function (buildings) {
    let buildingPoints = [];
    let index = 0;

    for (let building of buildings) {
        buildingPoints[index] = new BuildingPoint(building[0], true, building[2]);
        buildingPoints[index + 1] = new BuildingPoint(building[1], false, building[2]);
        index += 2;
    }

    buildingPoints.sort((a, b) => a.compareTo(b));

    let queue = new Map();
    queue.set(0, 1);
    let prevMaxHeight = 0;
    let result = [];

    for (let buildingPoint of buildingPoints) {
        if (buildingPoint.isStart) {
            queue.set(buildingPoint.height, (queue.get(buildingPoint.height) || 0) + 1);
        } else {
            if (queue.has(buildingPoint.height)) {
                if (queue.get(buildingPoint.height) === 1) {
                    queue.delete(buildingPoint.height);
                } else {
                    queue.set(buildingPoint.height, queue.get(buildingPoint.height) - 1);
                }
            }
        }

        const currentMaxHeight = Math.max(...queue.keys());

        if (prevMaxHeight !== currentMaxHeight) {
            result.push([buildingPoint.x, currentMaxHeight]);
            prevMaxHeight = currentMaxHeight;
        }
    }

    return result;
};
