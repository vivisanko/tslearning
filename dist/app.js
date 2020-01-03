"use strict";
console.log('app.ts');
class Person {
    constructor(name) {
        this.name = name;
    }
}
;
const nick = new Person("Nick");
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('btn click');
});
