//public(default)
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number = 5) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

const snake = new Animal("snake");
snake.move();
