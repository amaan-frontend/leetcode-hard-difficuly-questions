var makeSimilar = function (nums, target) {
    const isEven = num => num % 2 === 0;
    const isOdd = num => num % 2 === 1;

    const sortedNums = nums.sort((a, b) => a - b);
    const sortedTarget = target.sort((a, b) => a - b);

    const numsEven = sortedNums.filter(isEven);
    const targetEven = sortedTarget.filter(isEven);
    const numsOdd = sortedNums.filter(isOdd);
…    }

    return numberOfOperations / 2;
};
                                        
