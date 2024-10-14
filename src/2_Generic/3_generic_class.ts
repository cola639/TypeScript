class GenericNumber<T> {
  zeroValue: T = {} as T // 使用类型断言，赋予一个空的默认值
  add: ((x: T, y: T) => T) | undefined
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
