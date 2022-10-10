export interface Person {
  name: string
  age: number
}

// const tom: Person = {
//   name: 'tom' // error 'age' is missing in type '{ name: string; }'
// }

type optionalPerson = Partial<Person>

const john: optionalPerson = {
  name: 'john' // ok
}
