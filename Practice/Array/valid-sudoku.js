const arr = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]]

function validSudoku(arr) {
    const length = 9

    for (let row = 0; row < length; row++) {
        const set = new Set()
        for (let col = 0; col < length; col++) {
            const digit = arr[row][col]

            if (digit === '.') {
                continue
            }

            if (!set.has(digit)) {
                set.add(digit)
            } else {
                return false
            }
        }
    }

    for (let col = 0; col < length; col++) {
        const set = new Set()
        for (let row = 0; row < length; row++) {
            const digit = arr[row][col]

            if (digit === '.') {
                continue
            }

            if (!set.has(digit)) {
                set.add(digit)
            } else {
                return false
            }
        }
    }

    let startCol = 0
    for (let i = 0; i < length; i++) {
        const set = new Set()
        let startRow = Math.floor(i / 3) * 3

        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const digit = arr[row][col]

                if (digit === '.') {
                    continue
                }

                if (!set.has(digit)) {
                    set.add(digit)
                } else {
                    return false
                }
            }
        }

        startCol = startCol + 3 == 9 ? 0 : startCol + 3
    }

    return true
}

console.log(
    validSudoku(arr)
)