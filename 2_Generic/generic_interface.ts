// generic interface
interface GenericIdentityFn {
  <T>(arg: T): T
}

let myIdentity: GenericIdentityFn
