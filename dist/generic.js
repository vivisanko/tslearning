"use strict";
const cars = ['kia', 'audi'];
const cars2 = ['volvo', 'ford'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolvedß');
    }, 2000);
});
promise.then(data => {
    console.log('data', data.toUpperCase());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Victoria' }, { sex: 'female' });
console.log('merged.sex', merged.sex);
const merged2 = mergeObject({ model: 'ford' }, { year: 2010 });
console.log('merged2.model', merged2.model);
function withCount(value) {
    return {
        value,
        count: `В значении value ${value.length} символов`
    };
}
console.log('withCount(привет)', withCount('привет'));
console.log('withCount([])', withCount(['мяу', 'гав']));
console.log('withCount(20)', withCount({ size: 20, length: 10 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Ammy',
    age: 26,
    job: 'frontend',
};
console.log('getObjectValue(person, name)', getObjectValue(person, 'name'));
console.log('getObjectValue(person, name)', getObjectValue(person, 'job'));
class Collection {
    // private _items: T[]=[]
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['A', 'B', 'C']);
strings.add('E');
strings.remove('A');
console.log('strings.items', strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log('numbers.items', numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length >= 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const bestCars = ['ford', 'audi'];
// bestCars.shift();
console.log('bestCars', bestCars);
const ford = {
    model: 'ford',
    year: 2018,
};
// ford.year = 2019
