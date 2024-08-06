function isInArray(arr, number) {
    return arr.indexOf(number) !== -1;
}
 
// 示例使用
const myArray = [1, 2, 3, 4, 5];
const numberToCheck = 3;
 
console.log(isInArray(myArray, numberToCheck)); // 输出: true