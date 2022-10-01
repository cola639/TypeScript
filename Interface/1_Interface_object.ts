// 1_Object
interface IPoint {
  x: number
  y: number
}

const obj: IPoint = {
  x: 0,
  y: 1
}

// 2_Array
interface IArray {
  [index: number]: number
}

const arr: IArray = [1, 2, 3]

// 3_Function
interface ISetPoint {
  (x: number, y: number): void
}

const func: ISetPoint = (x: number, y: number) => {}

// 4_Array of object
interface IChildren {
  x: number
  y: number
}

interface IArraryObj {
  [index: number]: { id: number; label: string; key: number; children: IChildren }
}

const arrObj: IArraryObj = [{ id: 0, label: '0', key: 0, children: { x: 0, y: 0 } }]
