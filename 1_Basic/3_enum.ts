// enum
enum Resonsed {
  No, // default No = 0, Yes = 1 ...
  Yes
}

function respond(recipient: string, message: Resonsed): void {
  // ...
}

respond('Princess Caroline', Resonsed.Yes)
