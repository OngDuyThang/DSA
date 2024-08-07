function longestSubString(str) {
    let temp = '' + str[0]
    let max = 0, result = ''
    for (let i = 1; i < str.length; i++) {
        if (str[i] === temp[temp.length - 1]) {
            temp += str[i]
        } else {
            temp = '' + str[i]
        }
        if (temp.length > max) {
            max = temp.length
            result = temp
        }
    }
    return result
}

console.log(longestSubString('abyyydhahaaaaaag'))