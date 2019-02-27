const expandInTermsOfOne = n => {
    return Array.from({
        length: n
    }, () => 1);
};

const reduce = arr => {
    if (arr.length >= 2) {
        return [arr[0] + arr[1]].concat(arr.slice(2));
    } else {
        return arr;
    }
};

const hasDuplicates = arr => {
    return (new Set(arr)).size !== arr.length;
};

const areArraysEqual = (arr1, arr2) => {
    const a = arr1.slice(0).sort();
    const b = arr2.slice(0).sort();

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }

    return true;
}

const itemExists = (item, arr) => {
    const a = arr.filter(x => x.length == item.length);

    for (const x of a) {
        if (areArraysEqual(x, item))
            return true;
    }

    return false;
};

const getPartitions = arr => {
    const result = [];

    let r = arr.slice(0);
    result.push(r);

    while (r.length >= 2) {
        //r = reduce(r);
        result.push(r = reduce(r));

        let a = r.slice(0);

        while (a.length > 2 && hasDuplicates(a)) {
            a = [a[0]].concat(reduce(a.slice(1)));

            if (!itemExists(a, result))
                result.push(a);
        }
    }

    return result;
}

const reduceOnes = arr => {
    const result = [];

    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length;) {
            if (i != arr.length - 1) {
                if (arr[i] > 1) {
                    result.push(arr[i]);
                    i++;
                } else {
                    result.push(arr[i] + arr[i + 1]);
                    i += 2;
                }
            } else {
                result.push(arr[i]);
                i++;
            }
        }
    }

    return result;
};

function sum(n) {

    // for (i = 2; i < n; i++) {
    //     if (n % i == 0) {
    //         s.push(Array.from({
    //             length: parseInt(n / i)
    //         }, () => i));
    //     }
    // }

    const arr = getPartitions(expandInTermsOfOne(n));

    arr.slice(0).forEach(x => {
        if (x.length % 2 == 0 && x.length > 2) {
            let a = reduceOnes(x);
            if (!itemExists(a, arr))
                arr.push(a);
        }
    });

    console.log(arr);
    return arr.length;
}

// console.log(sum(5));
console.log(sum(10));