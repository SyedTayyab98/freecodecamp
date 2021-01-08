function mutation(arr) {
    let value = arr[0].toLowerCase();
    let compare = arr[1].toLowerCase();
    for (let i = 0; i < compare.length; i++) {
        if (value.indexOf(compare[i]) < 0) {
            console.log(value.indexOf(compare[i]));
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);