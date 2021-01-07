function confirmEnding(str, target) {
    let value = (str.substr(-target.length) === target) ? true : false;
    return value;
}

confirmEnding("Bastian", "n");