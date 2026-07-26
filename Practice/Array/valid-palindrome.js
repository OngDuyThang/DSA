const str = "A man, a plan, a canal: Panama"

function checkValid(char) {
    if (
        (char < 'a' || char > 'z') &&
        (char < '0' || char > '9')
    ) {
        return false
    }
    return true
}

function validPalindrome(str) {
    let left = 0, right = str.length - 1
    while (left < right) {
        const charLeft = str[left].toLowerCase()
        const charRight = str[right].toLowerCase()

        if (!checkValid(charLeft)) {
            left += 1
        }

        if (!checkValid(charRight)) {
            right -= 1
        }

        if (checkValid(charLeft) && checkValid(charRight)) {
            if (charLeft !== charRight) {
                return false
            }

            left += 1
            right -= 1
        }
    }

    return true
}

console.log(
    validPalindrome(str)
)

// function validPalindrome(str) {
//     str = str.toLowerCase()
//     const finalized = []

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]
//         if (
//             (char >= 'a' && char <= 'z') ||
//             (char >= '0' && char <= '9')
//         ) {
//             finalized.push(str[i])
//         }
//     }
//     console.log('finalized', finalized)

//     let left = 0, right = finalized.length - 1
//     while (left < right) {
//         if (finalized[left] !== finalized[right]) {
//             return false
//         }

//         left += 1
//         right -= 1
//     }

//     return true
// }