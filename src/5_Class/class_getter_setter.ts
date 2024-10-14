//1.before use getter setter

class Employee {
  fullName: string;
}

let employee = new Employee();

employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

//2.after used getter setter
let passcode = "secret passcode";
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}
