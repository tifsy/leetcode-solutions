/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    let ans1 = nums1.filter(a => set2.has(a)).length
    let ans2 = nums2.filter(a => set1.has(a)).length
    
    return [ans1, ans2]
};