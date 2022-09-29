interface Person {
  name: string
  age: number
}

// error
const tom: Person = {
  name: 'tom',
}

type optionalPerson = Partial<Person>
// ok
const john: optionalPerson = {
  name: 'john',
}
