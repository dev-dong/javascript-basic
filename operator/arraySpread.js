/**
 * Spread 연산자
 * - 배열이나 객체 변수
 * - ...변수명
 * - ...[1, 2, 3]
 * - 배열을 복사하거나 아니면 여러 배열을 하나를 합치거나 아니면 함수인자로 전달할 때 편리하게 사용할 수 있다.
 */

// 배열 spread
// 배열 복사
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]

// 여러개의 배열을 하나로 합칠 때
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const numbers = [...arr1, ...arr2, ...arr3];
console.log(numbers);

// 타입이 달라도 spread 연산이 가능하다.
const chars = ['a', 'b', 'c'];
console.log([...arr1, ...chars]);

// 문자열에도 사용할 수 있다.
// HelloWorld 문자열에서 각 개별 문자들이 하나씩 나열돼서 한 배열로 모두 복사된다.
const hello = [...'HelloWorld'];
console.log(hello);

// 구멍이 있는 배열
// 구멍이 있을 때도 그 구멍도 다 같이 복사된다. 구멍은 undefined로 채워진다.
const items = [1, , 3];
const copyItems = [...items];
console.log(copyItems);

// 배열의 일부분을 복사
const numbers1 = [1, 2, 3, 4, 5];
const copyNumber = [...numbers1.slice(2)];
console.log(copyNumber);

// 함수에 인자를 전달 때도 사용할 수 있다.
function sum(a, b) {
  return a + b;
}

const numbers2 = [1, 2, 3, 4, 5];
const result = sum(...numbers2); // 추가적으로 여러 개를 전달해도 앞에 있는 1, 2만 사용된다.
console.log(result);

// 얕은복사를 한다
const swallows = [[1], [2]];
const clone = [...swallows];
console.log(clone);
clone[0][0] = 'Hello'; // 배열을 복사할 때 참조용의 값은 얕은 복사만 수행해서 결국에는 가리키는 포인터의 주소만 복사한다.
console.log(clone);
console.log(swallows);
