/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    const totalLen = nums1.length + nums2.length;
    const isOdd = totalLen % 2 == 1;
    const mid = Math.floor(totalLen / 2);

    let index = -1;
    let lastElm;
    while (nums1[0] !== undefined || nums2[0] !== undefined) {

        let currentElm;
        if (nums1[0] <= nums2[0] || nums2[0] == undefined) {
            currentElm = nums1.shift();
            index++;
        } else {
            currentElm = nums2.shift();
            index++
        }

        if (index == mid) {
            return isOdd ? currentElm : (currentElm + lastElm) / 2;
        }

        lastElm = currentElm;
    }

};

findMedianSortedArrays([0, 0], [0, 0])
