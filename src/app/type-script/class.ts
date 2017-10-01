class User {
  public id: number;
  public name: string;

  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
  }
  public getInfo() {
    return 'id: ' + this.id + ' ' + 'name: ' + this.name;
  }
}

let tom: User = new User(4, 'Tomas');
console.log(tom.getInfo());

let henry: User = new User(7, 'Henry');
console.log(henry.getInfo());

class Operation {
  static PI: number = 3.14;

  static getSquare(radius: number) {
    return Operation.PI * radius * radius;
  }
}
let result = Operation.getSquare(30);
console.log('Площадь круга равна: ' + result);
