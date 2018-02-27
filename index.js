/**
 * Generate function for inserting selected index in sorted lookup.
 * @param {array} array
 * @returns {function}
 */
const insort = (array) => (x, low = 0, high = array.length) => {
    while (low < high) {
        let mid = low + high >>> 1;
        if (x < array[mid] - mid) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    const pos = x + low;
    array.splice(low, 0, pos);
    return pos;
}

/**
 * Generate function sampling unique values without mutating array.
 * @param {array} array
 * @returns {function}
 */
const uniqueSampler = (array, random = Math.random) => {
    const pos = insort([]);
    let count = array.length;
    return () => {
        if (count === 0) {
            throw new Error('No samples left to pick');
        }
        return array[pos(~~(random() * count--))];
    }
}

export default uniqueSampler;