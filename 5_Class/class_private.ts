//private
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal("Cat").name; //error
const animal = new Animal("Cat");
console.log(animal.name); //error
