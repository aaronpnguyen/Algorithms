function merge(array1,array2){
    let result = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < array1.length && index2 < array2.length) {
        if(array1[index1] < array2[index2]) {
            result.push(array1[index1]);
            index1++;
        } else{
            result.push(array2[index2]);
            index2++;
        }
    }
    while(index2 < array2.length) {
        result.push(array2[index2]);
        index2++;
    }
    while (index1 < array1.length) {
        result.push(array1[index1]);
        index1++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length/2)
        let leftHalf = arr.slice(0, mid)
        let rightHalf = arr.slice(mid, arr.length)
        let left = mergeSort(leftHalf)
        let right = mergeSort(rightHalf)
        return merge(left, right)
    } else {
        return arr
    }
}