// readonly must declare in declare or constructor
class Octopus {
  public readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man Strong");
dad.name = "Man with the 3-piece suit"; // error! name is readonly

//simple declare
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
