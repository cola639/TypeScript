type ToArray<Type> = Type extends any ? Type[] : never
type StrArrOrNumArr = ToArray<string | number> // Equal to type StrArrOrNumArr = string[] | number[]

const StrArrOrNumArr: StrArrOrNumArr = [1, 2, 3]
