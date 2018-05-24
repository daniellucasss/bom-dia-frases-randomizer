const data = require('./data')
const dataLenght = Object.keys(data).length

function returnRandomNum() {
  return Math.floor((Math.random() * dataLenght) + 1)
}

module.exports = data[returnRandomNum()]