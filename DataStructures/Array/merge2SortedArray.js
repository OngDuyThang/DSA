const a = [0, 3, 4, 31]
const b = [4, 6, 30]

let i = 0
let j = 0
const res = []
let temp1 = a[i]
let temp2 = b[i]

while (temp1 || temp2) {
    if (temp1 < temp2 || !temp2) {
        res.push(temp1)
        i += 1
        temp1 = a[i]
    } else {
        res.push(temp2)
        j += 1
        temp2 = b[j]
    }
}

console.log(res)