/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// 0 - str[i] = d, reversed = 'd' + '' = 'd'
// 1 - str[i] = a, reversed = 'a' + 'd' = 'ad'
// 2 - str[i] = v, reversed = 'v' + 'ad' = 'vad'
// 3 - str[i] = i, reversed = 'i' + 'vad' = 'ivad'
// 4 - str[i] = d, reversed = 'd' + 'ivad' = 'divad'

// const reverseString = (str) => {
//     let reversed = "";
//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }
//     return reversed;
// };

// module.exports = reverseString;


// 0 - char = d, reversed = 'd' + '' = 'd'
// 1 - char = a, reversed = 'a' + 'd' = 'ad'
// 2 - char = v, reversed = 'v' + 'ad' = 'vad'
// 3 - char = i, reversed = 'i' + 'vad' = 'ivad'
// 4 - char = d, reversed = 'd' + 'ivad' = 'divad'

// const reverseString = (str) => {
//     let reversed = "";
//     for (let ele of str) {
//         reversed = ele + reversed;
//     }
//     return reversed;
// };

// module.exports = reverseString;




//'david' => ['d', 'a', 'v', 'i', 'd'] => ['d', 'a', 'v', 'i', 'd'].reverse() => ['d', 'i', 'v', 'a', 'd'] => 'divad'
// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// };

// module.exports = reverseString;



// 'david' => ['D', 'a', 'v', 'i', 'd'] => ['d', 'i', 'v', 'a', 'D'] => 'divad'
// accumulator = '', currentValue = 'd' => accumulator = 'd' + '' = 'd'
// accumulator = 'd', currentValue = 'a' => accumulator = 'a' + 'd' = 'ad'
// accumulator = 'ad', currentValue = 'v' => accumulator = 'v' + 'ad' = 'vad'
// accumulator = 'vad', currentValue = 'i' => accumulator = 'i' + 'vad' = 'ivad'
// accumulator = 'ivad', currentValue = 'd' => accumulator = 'd' + 'ivad' = 'divad'

// 'david' => ['D', 'a', 'v', 'i', 'd'] => ['d', 'a', 'v', 'i', 'd'].reduce((a, c) => c + a, '') => 'divad'
const reverseString = (str) => {
    return str
    .split('')
    .reduce((accumulator, currentValue) =>  currentValue + accumulator);
};

module.exports = reverseString;