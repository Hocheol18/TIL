const myPromise = new Promise((resolve, reject) => {
    console.log('Promise 생성됨')

    let num = 1
    if (num === 0) {
        resolve('성공')
    } else {
        reject('로직 수행 실패')
    }
})

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(`error = ${error}`)
})