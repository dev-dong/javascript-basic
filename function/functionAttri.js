/**
 * 함수의 속성
 * - 함수는 객체
 * - 속성을 가지고 있다.
 */

// length 속성
function greet(name) {
    console.log(`Hello ${name}`);
}

console.log(greet.length); // 1

function sum(a, b) {
    // length 속성은 함수 내부에서도 접근이 가능하다.
    console.log(sum.length); // 2, 파라미터는 2개로 선언되었기 때문에 길이는 2
    return a + b;
}

sum(1, 2);
sum(1, 2, 3);

function spyFunc(func) {
    console.log(`파라미터: ${func.length}`)
}

function vector(x, y, z) {
    return {x, y, z};
}

spyFunc(sum); // 2
spyFunc(vector); // 3

// name 속성
function sum2(a, b) {
    console.log(sum2.name); // sum2
    return a + b;
}

function vector2(x, y, z) {
    console.log(vector2.name); // vector2
    return {x, y, z};
}

// arguments object 속성
// arguments 객체는 함수에 전달되는 모든 인자값을 가지고 있는 객체
function sum3(a, b) {
    console.log(arguments);
    return a + b;
}

sum3(10, 20);

// 커스텀 속성을 만들 수 있다.
function sum4(a, b) {
    if (!sum.callCount) sum.callCount = 0;
    sum.callCount += 1;
    console.log(sum.callCount);
    return a + b;
}

sum4(10, 20);
sum4(20, 30);
sum4(30, 40);
