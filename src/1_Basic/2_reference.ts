// 1_object
interface IObj {
  name: string
  age: number
}

let obj: IObj = {
  name: 'mosh',
  age: 30
}

// 2_array
let list: number[] = [1, 2, 3] // popular
let list1: Array<number> = [1, 2, 3]

// 3_function
// 3-1_function declaration
function sum(a: number, b: number): number {
  return a + b
}

// 3-2_function expression
const sum1 = (a: number, b: number): number => {
  return a + b
}

export {}
