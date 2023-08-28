var romanToInt = function(s) {
    const roman = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const currentRoman = roman[s[i]], next = roman[s[i + 1]]
        if (currentRoman < next) {
            sum += next - currentRoman
            i++
        }
        else sum += currentRoman
    }
    return sum;
};

console.log(romanToInt("XIV"))