type FC<P = {}> = FunctionComponent<P>

interface FunctionComponent<P = {}> {
  displayName: string | undefined
  (source: string, subString: string): boolean
}

let a: FC<string> = { displayName: '123' }

export {}
