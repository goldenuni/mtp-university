// @ts-nocheck
// 1. Оголошення змінних з типами та використання Union і Literal типів
let greeting: string = "Hello, TypeScript!";
const number: number | "unknown" = 42;
let pi: number = 3.14159;

// 2. Enum — для зручного визначення констант
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let currentDirection: Direction = Direction.Up;

// 3. Інтерфейси з додатковими полями та optional параметрами
interface Person {
    name: string;
    age: number;
    job?: string;  // optional поле
    introduce: () => string;
}

let person: Person = {
    name: "Alice",
    age: 25,
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.introduce());

// 4. Типи функцій та функції з параметрами за замовчуванням
type MathOperation = (x: number, y: number) => number;
const multiply: MathOperation = (x = 1, y = 1) => x * y;
console.log("Multiplication:", multiply(3, 4));

// 5. Tuple типи для масивів з різними типами елементів
let tupleExample: [string, number, boolean] = ["Alice", 25, true];

// 6. Generics — узагальнені типи
function identity<T>(arg: T): T {
    return arg;
}
console.log("Generic identity:", identity<string>("TypeScript"));

// 7. Типові параметри для Generics
function wrapInArray<T = string>(value: T): T[] {
    return [value];
}
console.log("Array of default type:", wrapInArray("Hello"));

// 8. Модифікатори доступу та readonly поля в класах
class Animal {
    private readonly name: string;  // readonly — не можна змінити після присвоєння

    constructor(name: string) {
        this.name = name;
    }

    public speak(): string {
        return `${this.name} makes a sound`;
    }
}

let animal = new Animal("Dog");
console.log(animal.speak());

// 9. Intersection типи — поєднання кількох типів
type HasName = { name: string };
type HasAge = { age: number };
type PersonInfo = HasName & HasAge;

const personInfo: PersonInfo = { name: "Alice", age: 30 };
console.log("Person Info:", personInfo);

// 10. Робота з типом `unknown` та приведення типів
let randomValue: unknown = "Hello!";
if (typeof randomValue === "string") {
    console.log("Random value is a string with length:", (randomValue as string).length);
}

// 11. Типи утиліт — Partial, Required, Readonly
type PartialPerson = Partial<Person>;
type RequiredPerson = Required<Person>;
type ReadOnlyPerson = Readonly<Person>;

let partialPerson: PartialPerson = { name: "Bob" };
console.log("Partial person:", partialPerson);
