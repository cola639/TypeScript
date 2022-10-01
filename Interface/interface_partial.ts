interface Person {
  name: string
  age: number
}

// error 'age' is missing in type '{ name: string; }'
const tom: Person = {
  name: 'tom'
}

type optionalPerson = Partial<Person>
// ok
const john: optionalPerson = {
  name: 'john'
}
