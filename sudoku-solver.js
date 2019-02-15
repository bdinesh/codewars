const isExists = (n, arr) => {
    return arr.indexOf(n);
}

const getStartIndexOfSubArray(i,j){
    if(i == 0 || i == 1 || i == 2 )
}

const getSubArray = (i, j, arr) => {
    const result = [];

    for (let x = i, ic = 0; x < 9; x++) {
        for (let y = j, jc = 0; y < 9; y++) {
            result.push(arr[x][y]);
            jc++;

            if (jc == 3) break;
        }
        ic++;

        if (ic == 3) break;
    }

    return result;
}

const getHArray = (i, arr) => {
    return arr[i];
};

const getVArray = (j, arr) => {
    const result = [];

    for (let i = 0; i < 9; i++) {
        result.push(arr[i][j]);
    }
    return result;
};

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sudoku(puzzle) {
    puzzle.forEach((v, i) => {
        v.forEach((x, j) => {
            if (x == 0) {
                puzzle[i][j] = 1;
            }
        });
    });
}

const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(getVArray(0, puzzle));