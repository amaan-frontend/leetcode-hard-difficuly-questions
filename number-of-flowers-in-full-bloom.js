
const sortedFlowers = flowers.sort((a, b) => a[1] - b[1]);
    const sortedPeople = people.sort((a, b) => a - b);
    const result = [];
    let flowerIndex = 0;
    let bloomCount = 0;

    for (let i = 0; i < sortedPeople.length; i++) {
        while (flowerIndex < sortedFlowers.length && sortedFlowers[flowerIndex][1] <= sortedPeople[i]) {
            bloomCount++;
            flowerIndex++;
        }
        result.push(bloomCount);
    }

    return result;
