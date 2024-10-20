// 1 定义一个键是字符串类型，值是数字类型的对象
type NumberDictionary = Record<string, number>

const scores: NumberDictionary = {
  Alice: 85,
  Bob: 92,
  Charlie: 78
}

// 错误示例：值类型必须是数字
// const invalidScores: NumberDictionary = { Alice: "85" }; // 报错，值应该是数字类型

// 2 定义一个对象，键只能是 'id', 'name', 'age'，值类型是 string
type UserRecord = Record<'id' | 'name' | 'age', string>

const user: UserRecord = {
  id: '123',
  name: 'Alice',
  age: '25'
}

// 错误示例：多出一个不允许的键
// const invalidUser: UserRecord = { id: '123', name: 'Alice', gender: 'female' }; // 报错，'gender' 键不允许

// 3 键是字符串类型，值是包含 'name' 和 'age' 属性的对象
type PeopleRecord = Record<string, { name: string; age: number }>

const people: PeopleRecord = {
  person1: { name: 'Alice', age: 30 },
  person2: { name: 'Bob', age: 25 }
}

// 错误示例：值类型必须符合定义的结构
// const invalidPeople: PeopleRecord = { person1: { name: 'Alice', age: '30' } }; // 报错，'age' 应该是数字类型

// 4 定义一个对象，键是 'id', 'name', 'age'，值类型是 string，但所有属性都是可选的
type OptionalUserRecord = Partial<Record<'id' | 'name' | 'age', string>>

const optionalUser: OptionalUserRecord = {
  id: '123' // 其他属性是可选的
}

// 使用 Pick 选择部分键
type PickedUserRecord = Pick<Record<'id' | 'name' | 'age', string>, 'id' | 'name'>

const pickedUser: PickedUserRecord = {
  id: '123',
  name: 'Alice'
  // age 被 Pick 排除，不能再使用
}

// 5 Record 类型不仅可以用于简单类型，也可以嵌套复杂对象，比如键为 ID，值为用户对象。
type Address = {
  city: string
  country: string
}

type User1 = {
  name: string
  age: number
  address: Address
}

// 以用户 ID 作为键的用户记录对象
type UserRecord1 = Record<number, User1>

const users: UserRecord1 = {
  1: {
    name: 'Alice',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  },
  2: {
    name: 'Bob',
    age: 25,
    address: {
      city: 'London',
      country: 'UK'
    }
  }
}

// 错误示例：嵌套对象的类型必须匹配
// const invalidUsers: UserRecord = {
//   1: {
//     name: 'Alice',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 100  // 报错，country 应该是字符串类型
//     }
//   }
// };
