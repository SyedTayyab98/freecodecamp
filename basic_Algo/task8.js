function truncateString(str, num) {
    let value = (str.length > num) ? str.slice(0, num) + '...' : str;
    console.log(value)
    return value;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);