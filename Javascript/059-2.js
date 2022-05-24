
// 부가설명 https://ko.javascript.info/microtask-queue

// 프라미스 체이닝이 아닌 경우
let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(10), 1000);
});

// 각각의 promise임

p.then(result => {
    console.log(result);
    return result ** 2;
});

p.then(result => {
    console.log(result);
    return result ** 2;
});

p.then(result => {
    console.log(result);
    return result ** 2;
});