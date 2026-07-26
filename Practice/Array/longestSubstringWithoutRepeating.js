const str = "aabcbcabcdesddd";

function findLongestSubstringWithoutRepeat(str) {
  let left = 0, right = 0
  let map = new Map()
  let currentMax = 0, max = 0

  while (right < str.length) {

    const duplicatedIndex = map.get(str[right])
    if (
      duplicatedIndex != undefined &&
      duplicatedIndex >= left &&
      duplicatedIndex < right
    ) {
      left = duplicatedIndex + 1

      max = Math.max(currentMax, max)
      currentMax = right - left
    }

    currentMax += 1
    map.set(str[right], right)
    right += 1
  }

  max = Math.max(currentMax, max)

  return max
}

console.log(
  findLongestSubstringWithoutRepeat(str)
)