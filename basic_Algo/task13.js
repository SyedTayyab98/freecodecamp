function bouncer(arr) {
    console.log(arr.indexOf(''));
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
    return newArr;
}

bouncer([7, "ate", "", false, 9]);