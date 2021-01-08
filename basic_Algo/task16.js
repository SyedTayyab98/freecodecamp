function chunkArrayInGroups(arr, size) {
    let newArr = []
        // let arr1 = arr.slice(0, size);
        // let arr2 = arr.slice(size, arr.length);
        // newArr = [arr1, arr2];
        // console.log(newArr);
    for (let i = 0; i < arr.length; i = i + size) {
        newArr.push(arr.slice(i, i + size));
    }
    console.log(newArr);
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);