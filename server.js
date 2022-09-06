const randomString = (length) => {
    const len = length ?? 10;
    const alphaNum = "abcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+";
    let str = '';
    let i = 0;
    while( i <  len){
        str += alphaNum.charAt(Math.ceil( Math.random() * i ));
        i++;
    }
    return str;
}

module.exports = randomString;