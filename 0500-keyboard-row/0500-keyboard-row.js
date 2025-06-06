/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const first = ['q', 'w', 'e', 'r','t', 'y', 'u', 'i','o', 'p']
    const second = ['a', 's', 'd','f', 'g', 'h','j', 'k', 'l']
    const third = ['z', 'x', 'c','v', 'b', 'n','m']
    let result = [];

    for (let word of words) {
        const lower = word.toLowerCase().split('')

        if (lower.every(a => first.includes(a)) || lower.every(a => second.includes(a)) || lower.every(a => third.includes(a))) {
            result.push(word)
        }
    }

    return result
};