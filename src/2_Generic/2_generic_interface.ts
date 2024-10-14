// 1-1_Generic function
interface GenericIdentityFn<T> {
  (arg: T): T
}

const identity = <T>(arg: T): T => {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity

myIdentity(123) // OK
// myIdentity('123') // Error

// 1-2_Generic function
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}

let createArray: CreateArrayFunc
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray(3, 'x') // ['x', 'x', 'x']

export {}
