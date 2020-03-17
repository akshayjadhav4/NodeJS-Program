const sum = (num1,num2) => num1 + num2
const PI = 3.14
//expose sum function to use outside
// Method 1
// module.exports.sum = sum
// module.exports.PI = PI

// Method2 

module.exports = {
    sum : sum,
    PI : PI
}