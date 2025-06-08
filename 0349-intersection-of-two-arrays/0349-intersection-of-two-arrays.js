/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    
    const arr1 = Array.from(set1)
    const arr2 = Array.from(set2)

    return arr1.filter(a => arr2.includes(a))
};