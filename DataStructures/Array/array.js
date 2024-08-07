class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length += 1
    }

    pop() {
        delete this.data[this.length - 1]
        this.length -= 1
    }

    remove(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length -= 1
    }
}

const arr = new MyArray()
arr.push(8)
arr.push(9)
arr.push(10)
console.log(arr)
arr.remove(1)
console.log(arr)