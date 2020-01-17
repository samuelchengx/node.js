console.log('this is lib~')

function fn1 () {
    console.log('fn1')
}

function fn2 () {
    console.log('fn2');
}

exports.fn1 = fn1;
exports.fn2 = fn2;

setTimeout(()=>{
    console.log('addtional', exports);
}, 2000)
