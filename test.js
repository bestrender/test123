// (function () {})()

function getData(){}
function getInfo(){}
function getMessage(){}

function* async () {
    yield getData();
    yield getInfo();
    yield getMessage();
}

let res = async()
function await (res) {
    if(!res.is_end) {
        res.next()
    }
}

async function () {
    // await getData()
    await()
}


function getData (cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, 3000)
    }).then((res) => {
        cb(res)
    }, (err) => {
        Toast.info(err)
    })
}

async function () {
    await getData((res) => {

    })
   
}





Array.prototype.myReduce = function (fn, init) {
    let arr = this;
    if(arr.constructor === 'Array'){
        let prev = 0
        if(!!init) {
            prev += init
            fn(prev, arr.shift(), 0)
        }

        for(var i=0; i<arr.length; i++) {
            let item = arr[i]
            prev =  prev + item
            fn(prev, item, !!init ? i+1: i)
        }
    } 
}

let arr = [1,2,5,6]
arr.myReduce((total, cur, index) => {
    return total + cur
}, 5)




console.log('adsfasdf')