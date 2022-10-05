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
  (x: number, y: number): void // params
}

interface SearchFunc {
  (source: string, subString: string): boolean
}

const func: ISetPoint = (x: number, y: number) => {}
const mySearch: SearchFunc = (source: string, subString: string) => {
  let result = source.search(subString)
  return result > -1
}
func(0, 1)
mySearch('source', 'subString')

// 4_Function params
interface ILabel {
  label: string
}

let interfaceLabel = { size: 10, label: 'Size 10 Object' } //ok {x:any, label:string}
const printLable = (label: ILabel) => {}
printLable(interfaceLabel)

// 5_Array of Object
interface IChildren {
  x: number
  y: number
}

interface IArraryObj {
  [index: number]: { id: number; label: string; key: number; children: IChildren }
}

const arrObj: IArraryObj = [{ id: 0, label: '0', key: 0, children: { x: 0, y: 0 } }]

export {}
