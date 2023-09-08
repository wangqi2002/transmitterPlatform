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

// todo 后期要删除
// 获得随机数据
// let obj = []
// for (var i = 0; i < 11; i++) {
//     const date = new Date();
//     let time = date.getHours() + ':' + date.getMinutes();
//     obj.push({ name: '灯丝流', time: time, value: getRandomInt(100, 800) })
// }
// console.log(obj)

export {
    getRandomArbitrary,
    getRandomInt,
    formatter
}