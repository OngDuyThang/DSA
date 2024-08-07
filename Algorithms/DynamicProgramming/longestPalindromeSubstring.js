function longestPalindrome(str) {
    if (str.length <= 1) {
        return str
    }
    let result = ''
    for (let i = 1; i < str.length; i++) {
        let left = i, right = i
        while (str[left] === str[right]) {
            if (left === 0 || right === str.length - 1) {
                break
            }
            left -= 1
            right += 1
        }

        if (str[left] !== str[right]) {
            left += 1
            right -= 1
        }
        if (right - left + 1 > result.length) {
            result = str.slice(left, right + 1)
        }

        left = i - 1
        right = i
        while (str[left] === str[right]) {
            if (left === 0 || right === str.length - 1) {
                break
            }
            left -= 1
            right += 1
        }

        if (str[left] !== str[right]) {
            left += 1
            right -= 1
        }
        if (right - left + 1 > result.length) {
            result = str.slice(left, right + 1)
        }
    }
    return result
}

console.log(longestPalindrome("cbbd"))