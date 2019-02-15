const getSubMat = m => {
    const result = [];

    m[0].forEach((v, n) => {
        let obj = {};
        obj[`v`] = v;
        let mm = [];

        for (let i = 0; i < m.length; i++) {
            let arr = [];

            for (let j = 0; j < m.length; j++) {
                if (i != 0 && j != n) {
                    arr.push(m[i][j]);
                }
            }

            if (arr.length > 0)
                mm.push(arr);
        }

        obj[`m`] = mm;
        result.push(obj);
    });

    return result;
};

function determinant(m) {
    if (m.length == 1) return m[0][0];

    if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    let result = 0;
    const values = [];

    if (m.length > 2) {
        const sub = getSubMat(m);

        sub.forEach(x => {
            console.log('coeff', x.v, 'sub', x.m);
            values.push(x.v * determinant(x.m));
        });

        console.log(values);

        for (let i = 0; i < values.length; i++) {
            if (i % 2 == 0) {
                result += values[i];
            }
            else{
                result -= values[i];
            }
        }
    }

    return result;
}

const m1 = [
    [1, 3],
    [2, 5]
];

const m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4]
];

const m3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

//console.log(determinant(m1));
// console.log(determinant(m2));
console.log(determinant(m3));