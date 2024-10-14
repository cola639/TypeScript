// 1_boolean
let isDone: boolean = true

// 2_number
const b: number = 10 //const asign  must have value
let num1: number = 10 // equal to let a = 10;
let num2: number // let asign not must have value

// 3_string
let name: string = 'bob'
name = 'smith'

// array
let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]

// 4_function
// 4-1_function declaration
function sum(a: number, b: number): number {
  return a + b
}

// 4-2_function expression
const sum1 = (a: number, b: number): number => {
  return a + b
}

// 5_Tuple
let x: [string, number]
x = ['hello', 10] // OK
// x = [10, 'hello'] // Error

// 6_assertion
// 6-1_<type>value
let stringValue: any = 'this is a string'
let stringLength: number = (<string>stringValue).length

// 6-2_value as type
let someValue: any = 'this is a string'
let someValueLength: number = (someValue as string).length

export {} // export namespace
