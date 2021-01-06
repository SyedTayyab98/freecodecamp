function rangeOfNumbers(startNum, endNum) {


    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
};