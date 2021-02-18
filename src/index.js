// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (matrix == undefined) || (matrix.length == 0) ? [] : matrix.map((e, i) => i % 2 != 0 ? e.reverse() : e).reduce((prev, curr) => prev.concat(curr));
}