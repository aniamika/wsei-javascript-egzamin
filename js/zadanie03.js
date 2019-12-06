
function bigestSumOfTwoElements(array) {

    if (array.length < 1) {
        return false;
    } else if (array.length === 1) {
        return array;
    } else if (array.length > 1) {
        let arrayFromLargest = array.sort( function(a,b) {
            return b-a;
        });
        let sum = arrayFromLargest[0] + arrayFromLargest[1];
        return sum;
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));
