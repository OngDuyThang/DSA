const str = "()[]{}"

function validParentheses(str) {
    const stack = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char)
                break
            default:
                const latest = stack.pop() || ''
                const value = char.charCodeAt(0) - latest.charCodeAt(0)
                if (value !== 1 && value !== 2) {
                    return false
                }
                break
        }
    }

    return stack.length === 0
}

console.log(
    validParentheses(str)
)