const s = 'anagram'
const t = 'nagaram'

function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        const decimal = s.charCodeAt(i)

        if (map.has(decimal)) {
            map.set(decimal, map.get(decimal) + 1)
        } else {
            map.set(decimal, 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        const decimal = t.charCodeAt(i)

        if (map.has(decimal)) {
            const count = map.get(decimal) - 1

            if (count > 0) {
                map.set(decimal, count)
            } else {
                map.delete(decimal)
            }
        }
    }

    return map.size === 0
}

console.log(
    validAnagram(s, t)
)