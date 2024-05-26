// 1_Generic before used
function identityBefore1(arg: number): number {
  return arg
}

function identityBefore2(arg: any): any {
  return arg
}

// generic after used
function identityFunction<T>(arg: T): T {
  return arg
}

const identityExpression = function <T>(arg: T): T {
  return arg
}

const identityArrow = <T>(arg: T): T => {
  return arg
}
// equal to
type IdentityFunctionType<T> = (arg: T) => T

const identityArrow2: IdentityFunctionType<number> = arg => arg

// 2_Generic Array error
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length) // Error: T doesn't have .length
  return arg
}

// generic Array params
function loggingIndentityPassArr1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// equal to
function loggingIndentityPassArr2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

// <T>(arg: T[]): T[] Generic Parameter Declaration <T>:

// The <T> after the function name is the generic parameter declaration. Here, we declare a generic parameter named T.
// T is a placeholder that can represent any type and will be determined when the function is called.
// Function Parameter arg: T[]:

// The arg parameter is a generic array, meaning it is an array of type T.
// Since T is defined as a generic parameter in the function declaration,
// it can be any type such as number, string, object, etc.

// Return Type T[]:
// The function also returns an array of type T.
// This ensures that the type of the returned array matches the type of the input array.
