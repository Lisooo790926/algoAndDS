var findKthLargest = function (nums, k) {

    // Array.sort
    // nums.sort((a,b)=>b-a);
    // return nums[k-1];


    // try to use the quick sort partition
    // if k-1 > partition, hi = partition - 1
    // if k-1 < partition, lo = partition + 1
    // for large to small case
    // if k-1 == partition return nums[k]

    let lo = 0;
    let hi = nums.length - 1;

    shuffle(nums); // shuffle is to make sure no worse case

    while (hi >= lo) {
        let partitionIdx = partition(nums, lo, hi);

        if (k - 1 > partitionIdx) {
            lo = partitionIdx + 1;
        } else if (k - 1 < partitionIdx) {
            hi = partitionIdx - 1;
        } else {
            return nums[partitionIdx]
        }
    }

    return -1;
}

function partition(nums, left, right) {

    let pivot = nums[right];
    let partition = left;

    for (let i = left; i < right; i++) {
        let current = nums[i];
        if (pivot < current) {
            swap(nums, i, partition);
            partition++;
        }
    }
    swap(nums, right, partition);
    return partition;
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function shuffle(nums) {
    const end = nums.length -1;
    for(let i=0; i<nums.length; i++) {
        let random = Math.floor(Math.random() * end);
        swap(nums, random, i);
    }
}
