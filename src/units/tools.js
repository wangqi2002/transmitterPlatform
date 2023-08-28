// 得到一个两数之间的随机数
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

// 得到一个两数之间的随机整数
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

// 取有效数字
const formatter = (digit) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: digit,
    })
}
// eg: formatter(4).format()

export {
    getRandomArbitrary,
    getRandomInt,
    formatter
}