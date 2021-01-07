function factorialize(num) {
    let newNum = 1;
    for (let i = 1; i <= num; i++) {
        newNum = newNum * i;
    }
    // console.log(num, newNum);
    return newNum;
}

factorialize(5);