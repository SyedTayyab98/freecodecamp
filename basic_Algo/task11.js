function titleCase(str) {
    let lowerCase = str.toLowerCase().split(' ');
    let result = lowerCase.map(val => {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
}

titleCase("I'm a little tea pot");