class Animal1 {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal1 {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters: number = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal1 = new Horse('Tommy the Palomino')

sam.move()
tom.move(34)
