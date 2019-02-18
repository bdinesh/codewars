const getMinor = m => {
    let result = [];

    m[0].forEach((v, n) => {
        let obj = {};
        obj['coeff'] = v;
        let minor = [];

        for (let i = 0; i < m.length; i++) {
            let arr = [];

            for (let j = 0; j < m.length; j++) {
                if (i != 0 && j != n) {
                    arr.push(m[i][j]);
                }
            }

            if (arr.length > 0)
                minor.push(arr);
        }

        obj['minor'] = minor;
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
        const minor = getMinor(m);

        minor.forEach(x => {
            values.push(x.coeff * determinant(x.minor));
        });

        result = values.reduce((a,b,i) => {
            const c = i%2 == 0 ? 1 : -1;
            return a + b*c;
        });
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

console.log(determinant(m1));
console.log(determinant(m2));
console.log(determinant(m3));