// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return []
    } else {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i].reverse()
        }
        let a = matrix.reduce((acc, item) => {
            return acc = acc.concat(item)
        }, [])
        return a
    }

}