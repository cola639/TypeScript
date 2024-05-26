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
