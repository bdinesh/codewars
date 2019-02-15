const isOverlap = (a, b) => (b[0] >= a[0] && b[0] < a[1]) || (b[0] < a[0] && b[0] < a[1] && b[1] > a[1]);
const isEqual = (a, b) => a[0] == b[0] && a[1] == b[1];

const itemExists = (arr, item) => {
    let result = false;

    arr.forEach(x => {
        if (isEqual(x, item)) {
            result = true;
            return;
        }
    });

    return result;
}

const mergeOverlapedIntervals = (arr) => {
    const result = [];

    if (arr.length == 1) return arr;

    arr.forEach((v, i, a) => {
        const remainingItems = a.slice(i + 1);
        let hasOverlap = false;

        remainingItems.forEach((x, j) => {
            if (isOverlap(v, x)) {
                hasOverlap = true;
                const item = [Math.min(v[0], x[0]), Math.max(v[1], x[1])];
                if (!itemExists(result, item))
                    result.push(item);
                delete arr[i + j + 1];
            }

            if (isEqual(v, x)) {
                delete arr[i + j + 1];
            }
        });

        if (!hasOverlap) result.push(v);
    });

    return result;
};

function sumIntervals(intervals) {
    console.log(intervals);
    let sum = 0;
    const ranges = mergeOverlapedIntervals(intervals);
    console.log(ranges);

    ranges.forEach(x => {
        sum += x[1] - x[0];
    });

    return sum;
}

// const test1 = [
//     [1, 5]
// ];
// const test2 = [
//     [1, 5],
//     [6, 10]
// ];
var test3 = [
    [1, 5],
    [1, 5]
];
var test4 = [
    [1, 4],
    [7, 10],
    [3, 5],
    [2, 5]
];

console.log(sumIntervals(test3));
console.log(sumIntervals(test4));