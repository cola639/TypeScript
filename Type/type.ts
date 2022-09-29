type FC<P = {}> = FunctionComponent<P>

interface FunctionComponent<P = {}> {
  displayName: string | undefined
}

let a: FunctionComponent = { displayName: '1222' }

export {}
