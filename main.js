import { Person } from './person.js';
import { monitorPerformance } from './monitor.js';

// Difference between a person wrapped in a proxy and not.

let t0 = performance.now();
console.time('p1');
const p1 = monitorPerformance(new Person('John'));
p1.compute();
p1.sayHello();
p1.sayHello('Mark');
console.timeEnd('p1');
console.log('Performace p1: ' + (performance.now() - t0));

t0 = performance.now();
console.time('p2');
const p2 = new Person('John');
p2.compute();
p2.sayHello();
p2.sayHello('Mark');
console.timeEnd('p2');
console.log('Performace p2: ' + (performance.now() - t0));
