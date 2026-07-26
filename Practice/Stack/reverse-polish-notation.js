const arr = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

function ReversePolishNotation(arr) {
    const operators = ['+', '-', '*', '/']
    const length = arr.length
    const stack = []

    for (let i = 0; i < length; i++) {
        const char = arr[i]

        if (!operators.includes(char)) {
            stack.push(Number(char));
        }

        if (operators.includes(char)) {
            const b = stack.pop()
            const a = stack.pop()

            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
            }
        }
    }

    return stack[0]
}

console.log(
    ReversePolishNotation(arr)
)