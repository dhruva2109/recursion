function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let [leftIndex, rightIndex] = [0, 0];
    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]);
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
console.log(mergeSort([105, 79, 100, 110]));      
 26 changes: 26 additions & 0 deletions26  
test.js
function fibs(n) {
    let arr = [0, 1];
    while (arr.length < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr.slice(0, n);
}


console.log(fibs(8));



function fibsRec(n) {
    if (n <= 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let prev = fibsRec(n - 1);
        return prev.concat(prev[prev.length - 1] + prev[prev.length - 2]);
    }
}


console.log(fibsRec(8));
