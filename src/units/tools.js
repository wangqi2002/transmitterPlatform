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

//获取前 n分钟时间
const getBeforeTime = (nowDate, n) => {
    var date = new Date(nowDate);     //1. js获取当前时间
    var min = date.getMinutes();  //2. 获取当前分钟
    date.setMinutes(min - n);  //3. 设置当前时间+10分钟：把当前分钟数+10后的值重新设置为date对象的分钟数
    var y = date.getFullYear();
    var m = (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    var d = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
    var f = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
    var formatdate = y + '-' + m + '-' + d + " " + h + ":" + f;
    return formatdate
}

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
    formatter,
    getBeforeTime,
}