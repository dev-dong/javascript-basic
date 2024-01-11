/**
 * typeof 연산자
 * - 변수의 타입을 조사할 때 사용
 * - 결과는 문자열
 */

console.log(typeof 42); // number
console.log(typeof 3.14); // number
console.log(typeof NaN); // number
console.log(typeof Infinity);

console.log(typeof ''); // string
console.log(typeof 'Hello'); // string

console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof Symbol()); // symbol
console.log(typeof BigInt(123)); // bigint

let x;
console.log(typeof x); // undefined

function greet() {
    console.log('Hello');
}

console.log(typeof greet); // function
console.log(typeof {}); // object
console.log(typeof {name: 'Lee'}) // object
console.log(typeof []); // object - 오브젝트하고 배열은 typeof 연산자로 구분이 안된다.
console.log(typeof [1, 2, 3]); // object
console.log(Array.isArray([])); // true, 배열을 구분할 때는 Array.isArray() 메서드를 사용한다.
console.log(Array.isArray({})); // false
console.log([].constructor === Array); // true, constructor 값이 Array이면 배열이다.
console.log(typeof undefined); // undefined
console.log(typeof null); // object - null이 object로 나오는경우 초기의 버그로 인해 그렇다고 한다.
console.log({} instanceof Object); // true
console.log(null instanceof Object); // false

// 타입 정보를 자세하게 가져오는 방법 - 객체의 프로토타입 사용
const type = Object.prototype.toString.call(null);
console.log({type}); // [object Null]
console.log(Object.prototype.toString.call([])); // [object Array]
