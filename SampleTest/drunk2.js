const reader = require("stdin-reader")

// function input() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     return new Promise(resolve => {
//         rl.on('line', (value) => {
//             rl.close()
//             resolve(value)
//         })
//     })
// }

function main() {
    const cases = reader.readline()
    let arr = []
    for (let i = 0; i < cases; i++) {
        const m = reader.readline()
        let temp = []
        for (let j = 0; j < m; j++) {
            temp.push(reader.readline())
        }
        arr.push(temp)
    }

    for (let i = 0; i < cases; i++) {
        console.log(`Case ${i + 1}: ${drunk(arr[i])}`)
    }
}
main()

function drunk(arr) {
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const other = str.split(' ')[0]
        const wine = str.split(' ')[1]
        if (wine !== 'wine' || other === 'wine') {
            return 'No'
        }
    }
    return 'Yes'
}