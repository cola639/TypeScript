// 1_interface option bags ?:
interface SquareConfig {
  color?: string
  width?: number
}

const createSquare = (config: SquareConfig): { color: string; area: number } => {
  let newSquare = { color: 'white', area: 100 }

  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

createSquare({ color: 'black' })

// 2_interface extra check
// interface SquareConfig {
//   color?: string
//   width?: number
//   [propName: string]: any
// }

// 2_interface Array Index
interface StringArray {
  [index: number]: string
}

let stringArr: StringArray
stringArr = ['Bob', 'Fred']

// 3_interface dictionary mode
interface NumberDictionary {
  [index: string]: number
  length: number //ok,length is number type
  //  name: string // error,name is not number type
}

// 4_interface set readonly indexable
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let readonlyArr: ReadonlyStringArray = ['Alice', 'Bob']
// readonlyArr[0] = 'Mallory' // error! Index signature in type 'ReadonlyStringArray' only permits

// 5_interface class implements
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }

  constructor(h: number, m: number) {}
}
// interface class constructor
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

export {}
