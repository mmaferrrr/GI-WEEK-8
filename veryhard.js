class Person { // create a person constructor
    constructor (name, job, age) {
       this.name = name;
       this.job = job;
       this.age = age;
    }
    exercise () { // create a method
        console.log("running sucks!");
    }
    fetchJob () { // create another method
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person { // create a programmer constructor thats going to extend the class constrcutor. You have to use "super" with extend.

    constructor (name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

completeTask() { // create a method
    this.busy = false;
  }

  acceptNewTask() { // create another method
    this.busy = true;
  }

  offerNewTask() { // create another method
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }

  learnLanguage(language) { // create another method
    this.languages.push(language);
  }

  listLanguages() { // create another method
    return this.languages;
  }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();