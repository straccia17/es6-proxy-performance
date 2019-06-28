/**
 * Simple class with two methods, one populates an array of 50000000 elements,
 * the second print a greeter message.
 */
export class Person {

    constructor(name) {
        this.name = name;
    }

    compute() {
        const ar = [];
        for (let i =0; i<50000000; i++) {
            ar.push(i);
        }
    }

    sayHello(name) {
        console.log(`Hello ${name || this.name}`);
    }
    
}