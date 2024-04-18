/**
 * 함수의 파라미터 그리고 아규먼트
 * parameter, argument
 * 값 복사, 참조전달
 */
// 기본값
// 기본값은 항상 맨 뒤에 위치해야 한다.
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
greet('CodingMax'); // Hello, CodingMax

function point(x = 0, y = 0, z = 0) {
    console.log({x, y, z});
    return {
        x, y, z
    };
}

point(); // { x: 0, y: 0, z: 0 }
point(10); // { x: 10, y: 0, z: 0 }
point(10, 20); // { x: 10, y: 20, z: 0 }
point(10, 20, 30); // { x: 10, y: 20, z: 30 }

// 자바스크립트의 일반함수
// arguments object
// arguments 객체는 함수의 파라미터로 전달되는 모든 인자 값을 다 가지고 있다.
// arguments 객체는 배열이 아니다 배열하고 비슷한 객체이다. arguments 객체는 화살표 함수에서는 지원하지 않는다.
// 대신 es6에 도입된 나머지 파라미터 연산자를 사용한다.
function manyArgs() {
    for (const arg of arguments) {
        console.log(arg);
    }
}

manyArgs(); // 아무것도 출력되지 않는다.
manyArgs(1); // 1
manyArgs(1, 'Hello', ['a', 'b'], {name: 'Dong'}); // 1, Hello, [ 'a', 'b' ], { name: 'Dong' }

// es6에 도입된 나머지 파라미터 연산자
// args 파라미터는 배열이다.
// 주의 : 나머지 파라미터 사용 시 맨 마지막에 위치해야 한다. 또한 항상 하나만 사용할 수 있다.
// 나머지 파라미터 앞에 일반 파라미터를 정의 하면 순차적으로 할당된다.
const manyArgs2 = (a, b, ...args) => {
    console.log({a})
    console.log({b})
    console.log({args})
}

manyArgs2(); // 아무것도 출력되지 않는다.
manyArgs2(1); // 1
manyArgs2(1, 'Hello', ['a', 'b'], {name: 'Dong'}); // 1, Hello, [ 'a', 'b' ], { name: 'Dong' }

// 객체 구조분해
function logArgs({name, age, ...rest}) {
    console.log({name, age, rest});
}

const person = {
    name: 'CodingMax', age: 30, address: 'Seoul', info: {
        country: 'Korea'
    }
}
logArgs(person); // { name: 'CodingMax', age: 30, rest: { address: 'Seoul', info: { country: 'Korea' } } }

// 배열 구조분해 - 배열 구조분해는 [] 사용
function logArgs2([head, middle, ...tail]) {
    console.log({head, middle, tail});
}

logArgs2([1, 2, 3, 4, 5]); // { head: 1, middle: 2, tail: [ 3, 4, 5 ] }
