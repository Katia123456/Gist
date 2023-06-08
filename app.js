
//Quete 1/
function hello(name : string):void {
    console.log("Hello " + name);
}

const firstName: string = "bob";

hello(firstName );
hello(firstName + " marley");

function concat(a:number  , b: number):number {
    return a + b;
}

const wcs: string= concat ("Wild", concat("Code" , "School"));
console.log(wcs);


//Quete 2/

interface User {
    name: string;
    age: number;
  }
  
  const prettyPrintWilder = (users: User[]): void => {
    users.map((user: User) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders: User[] = [];
  const user1: User = { name: "Pierre", age: 23 };
  const user2: User = { name: "Paul", age: 31 };
  const user3: User = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);




//Quete 3/

  class BankCustomer {
    private name: string;
    private pin: string;
  
    constructor(name: string, pin: string) {
      this.name = name;
      this.pin = pin;
    }
  
    getName(): string {
      return this.name;
    }
  
    verifyPinInput(input: string): boolean {
      return input === this.pin;
    }
  }
  
  const customer = new BankCustomer('John Doe', '3579');
  console.log(typeof customer.getName); 
  console.log(typeof customer.verifyPinInput); 
  console.log(customer.getName()); 
  console.log(customer.verifyPinInput('3579'));



  //Quete 4/
  class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    tellMyName(): void {
      console.log(`I am ${this.name}`);
    }
  
    tellMyAge(): void {
      console.log(`I am ${this.age} years old`);
    }
  }
  
  const john = new Person("John", 40);
  const mary = new Person("Mary", 35);
  
  john.tellMyName();
  john.tellMyAge(); 
  
  mary.tellMyName(); 
  mary.tellMyAge(); 
