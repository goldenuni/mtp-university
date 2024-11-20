// 1. Класи та інкапсуляція
class Animal {
  #name;
  
  constructor(name) {
      this.#name = name;
  }

  speak() {
      console.log(`${this.#name} каже: Привіт!`);
  }
}

const dog = new Animal("Тузік");
dog.speak();

// 2. Геттер та Сеттер
class Rectangle {
  constructor(width, height) {
      this.width = width;
      this.height = height;
  }

  get area() {
      return this.width * this.height;
  }

  set dimensions({ width, height }) {
      this.width = width;
      this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.dimensions = { width: 6, height: 7 };
console.log(rect.area); // 42

// 3. Стрілкові функції та контекст
const user = {
  name: "Іван",
  greet: function() {
      setTimeout(() => {
          console.log(`Привіт, ${this.name}!`);
      }, 1000);
  }
};
user.greet(); 

// 4. Проміси та асинхронність
function fetchData() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Дані завантажено!");
      }, 2000);
  });
}

fetchData().then((data) => console.log(data));

// 5. Асинхронні функції з async/await
async function loadData() {
  const data = await fetchData();
  console.log(data);
}
loadData();

// 6. Декоратор для логування
function logMethod(target, key, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
      console.log(`Викликаємо ${key} з аргументами ${args}`);
      return original.apply(this, args);
  };
  return descriptor;
}

class MathOperations {
  @logMethod
  sum(a, b) {
      return a + b;
  }
}

const math = new MathOperations();
console.log(math.sum(2, 3));

// 7. Замикання
function counter() {
  let count = 0;
  return function () {
      count++;
      return count;
  };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// 8. Деструктуризація об'єктів
const person = { name: "Марія", age: 25, city: "Київ" };
const { name, age, city } = person;
console.log(`${name} з міста ${city} у віці ${age}`);

// 9. Оператор поширення (...spread)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log(arr2); // [4, 5, 1, 2, 3]

// 10. Модуль (IIFE)
const myModule = (() => {
  let privateVar = "SuperSecret";
  
  function getPrivate() {
      return privateVar;
  }
  
  return {
      getPrivate
  };
})();
console.log(myModule.getPrivate());
