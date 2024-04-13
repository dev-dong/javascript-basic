/**
 * 데이터 타입
 * 배열 Array
 * - 여러 개의 값을 담는 컬렉션 타입
 * - 데이터의 목록을 표현한다.
 */
// 원소의 추가와 삭제
const emptyArray = []
emptyArray[10] = 'a' // 0 ~ 9까지는 undefined로 채워진다.
console.log(emptyArray.length)
console.log(emptyArray)

const numbers = [1, 2, 3, 4]
numbers[10] = 10 // 4 ~ 9까지는 undefined로 채워진다.
console.log(numbers.length)
console.log(numbers)

// 배열의 끝에 추가하고 삭제
// push, pop
const items = []
items.push('a')
items.push('b')
console.log(items)
items.push('c')
console.log(items)

// 배열의 끝에서 삭제
items.pop()
console.log(items)
const item = items.pop()
console.log(item)
console.log(items)
console.log(items.pop())
console.log(items) // 빈 배열

// 배열의 앞에서 원소 추가하고 삭제하기
// unshift, shift
const number = [1, 2, 3, 4]
number.unshift(0) // 1의 앞에 0을 추가
console.log(number)
number.unshift(-1) // 0의 앞에 -1을 추가
console.log(number)
console.log(number.shift()) // -1을 삭제

// 임의 인덱스에서 원소를 추가하고 삭제하기
const numbers2 = [1, 2, 3, 4]
delete numbers2[2] // 2번째 인덱스 삭제
console.log(numbers2) // [1, 2, <1 empty item>, 4] 해당 인덱스에서 원소를 제거하지 않고 그냥 값만 재설정해서 delete는 잘 사용하지 않는다.
console.log(numbers2.length)

// splice
// splice(startIndex, deleteCount, items)
// 원소 삭제
const numbers3 = [1, 2, 3, 4]
const item3 = numbers3.splice(1, 2)
console.log({item3}) // 결과값을 배열로 반환한다.
console.log({numbers3})

// 원소 교체
const number4 = [1, 2, 3, 4]
// 시작 인덱스 1부터 2개의 원소를 삭제하고 그 자리에 'two', 'three', 'five'를 추가한다.
const item4 = number4.splice(1, 2, 'two', 'three', 'five')
console.log({item4})
console.log({number4})

// 원소 추가
const number5 = [1, 2, 3, 4]
const item5 = number5.splice(1, 0, 'a', 'b')
console.log({item5})
console.log({number5})
console.log(number5.splice(1)) // splice 메서드가 반환하는건 삭제된 배열의 아이템이다
