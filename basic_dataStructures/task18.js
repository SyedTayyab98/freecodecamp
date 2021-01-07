function countOnline(usersObj) {
    // Only change code below this line
    let c = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            c++;
        }
    }
    return c;
    // Only change code above this line
}