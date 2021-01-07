function repeatStringNumTimes(str, num) {
    console.log(str, num);
    let newStr = '';
    for (let i = 0; i < num; i++) {
        newStr = newStr + str;
    }
    // console.log(newStr);
    return newStr;
}

repeatStringNumTimes("abc", 3);