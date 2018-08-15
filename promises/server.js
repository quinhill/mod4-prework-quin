let testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10`)
    } else {
      reject(`${num} is less than 10`)
    }
  })
}

const check = (list) => {
  return list.every(function (i) { return typeof i === "string" });
}

let makeAllCaps = (list) => {
  return new Promise((resolve, reject) => {
    if (check(list)) {
      resolve(list.map(item => item.toUpperCase()))
    } else {
      reject('Sorry, all items in the array must be a string')
    }
  })
}

let sortWords = (list) => {
  return new Promise((resolve, reject) => {
    resolve(list.sort())
  })
} 