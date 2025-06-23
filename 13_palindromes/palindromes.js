const palindromes = function (str) {
    var str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    console.log(str);
    var strReversed = str.split("").reverse().join('');
    console.log(strReversed);

    return strReversed === str;

};

// Do not edit below this line
module.exports = palindromes;