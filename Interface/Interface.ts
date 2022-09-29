// interface before used
function printLabel0(labelledObj: { label: string }) {
  console.log(labelledObj.label)
}

let myObj0 = { size: 10, label: 'Size 10 Object' }
printLabel0(myObj0)

// interface after used
interface LabelledValue {
  label: string
}

function printLabel1(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj1 = { size: 10, label: 'Size 10 Object' } //ok {x:any, label:string}
printLabel1(myObj1)

// interface option bags ?:
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }

  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

let mySquare = createSquare({ color: 'black' })

// interface extra check
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

// interface function
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}

// interface Array Index
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

// interface dictionary mode
interface NumberDictionary {
  [index: string]: number
  length: number //ok,length is number type
  name: string // error,name is not number type
}

// interface set readonly indexable
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob']
myArray[2] = 'Mallory' // error!

// interface class implements
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

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
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
