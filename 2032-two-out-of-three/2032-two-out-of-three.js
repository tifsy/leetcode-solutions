/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let freq = {}
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const set3 = new Set(nums3)

    for(let a of set1){
        freq[a] ? freq[a]++ : freq[a] = 1
    }
    for(let b of set2){
        freq[b] ? freq[b]++ : freq[b] = 1
    }
    for(let c of set3){
        freq[c] ? freq[c]++ : freq[c] = 1
    }
    return Object.keys(freq).filter(key => freq[key] >= 2).map(Number)
};