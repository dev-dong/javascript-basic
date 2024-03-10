/**
 * 데이터 타입
 * 배열 Array
 * - 여러 개의 값을 담는 컬렉션 타입
 * - 데이터의 목록을 표현한다.
 */
// 1. 배열 리터럴 []
const emptyArray = [];
console.log(emptyArray);
let numbers = [1, 2, 3];
console.log(numbers);
const names = ['철수', '영수', '영희'];
console.log(names);

// 배열은 여러 타입의 값들을 동시에 담을 수 있다. 하지만 추천하지 않는다.
const anyItems = [1, 'two', {name: 'three'}, [4, 5]];
console.log(anyItems);

// 2. Array 생성자 함수
const emptyArray2 = new Array();
console.log(emptyArray2);

// 배열의 원소 개수가 되며 undefined로 초기화된다.
const fiveItems = new Array(5);
console.log(fiveItems);

// 배열 인덱스
// 인덱스 => 값
const chars = ['a', 'b', 'c', 'd'];
console.log(chars[0]);
console.log(chars[1]);
console.log(chars[2]);
console.log(chars[3]);

// 자바스크립트는 오류에 관대하다. 따라서 인덱스 번호를 반드시 검사하는게 중요하다.
console.log(chars[-1]);
console.log(chars[100]);

chars[0] = chars[0].toUpperCase();
chars[1] = chars[1].toUpperCase();
chars[2] = chars[2].toUpperCase();
chars[3] = chars[3].toUpperCase();

console.log(chars);

const abcd = 'abcd';
abcd[0] = abcd[0].toUpperCase(); // 문자열은 불변한 타입이기 때문에 변경이 불가능하다.

// 배열 길이
const chars2 = ['a', 'b', 'c', 'd'];
console.log(chars2.length);
const firstIndex = 0; // 첫번째 인덱스
const lastIndex = chars2.length - 1; // 마지막 인덱스
console.log(chars2[firstIndex]);
console.log(chars2[lastIndex]);

const lastIndex2 = emptyArray.length - 1;
console.log(lastIndex2);

// 배열 연결 - concat 메서드를 사용해서 결합
const result = [1, 2].concat([3, 4]);
console.log(result)
