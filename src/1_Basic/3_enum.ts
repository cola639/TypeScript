// enum
// default No = 0, Yes = 1 ...
enum Reposed {
  No,
  Yes
}

function respond(recipient: string, message: Reposed): void {
  // ...
}

respond('Princess Caroline', Reposed.Yes)
