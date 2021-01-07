function findLongestWordLength(str) {
    // console.log(str.split(' '));
    let strSplit = str.split(' ');
    let longStr = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longStr) {
            longStr = strSplit[i].length;
        }
    }
    return longStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");