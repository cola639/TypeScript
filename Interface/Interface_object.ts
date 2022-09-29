interface Point {
  x: number
  y: number
}

interface SetPoint {
  (x: number, y: number): void
}

const a: SetPoint = (x: number, y: number) => {}
const func: SetPoint = (x: number, y: number) => {}
