// 1_interface_extends
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = <Square>{} // assertion equal to {} as Square
square.color = 'blue'
square.sideLength = 10

// 2_interface extends principles, interface extends suggest no more than three
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}
// no more than three
interface Square extends Shape, PenStroke {
  sideLenth: number
}

let rectangle = <Square>{}
rectangle.color = 'blue'
rectangle.sideLength = 10
rectangle.penWidth = 5.0

// 3_interface_implements class

class Control {
  private state: undefined
}

interface SelectableControl extends Control {
  select(): void
}

class TextBox extends Control {
  select() {}
}

class Button extends Control implements SelectableControl {
  select() {}
}

// error: Property 'state' is missing in type 'Image'
// class Image implements SelectableControl {
//   select() {}
// }

export {}
