function getIndexToIns(arr, num) {
    let newNum = 0;
    arr.sort((a, b) => a - b);
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);