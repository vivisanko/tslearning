const cars: string[] = ['kia', 'audi'];
const cars2: Array<string> = ['volvo', 'ford'];

const promise = new Promise<string>(resolve=> {
    setTimeout(()=>{
        resolve('Promise resolvedß')
    }, 2000)
})

promise.then(data=>{
    console.log('data', data.toUpperCase());  
})

function mergeObject<T extends object, R extends object>(a:T, b:R) {
    return Object.assign({}, a, b);
}

const merged=mergeObject({name: 'Victoria'}, {sex: 'female'});

console.log('merged.sex', merged.sex);
const merged2 = mergeObject({model: 'ford'}, {year: 2010});
console.log('merged2.model', merged2.model);

// const merged3 = mergeObject('aaa', 'bbb');
// console.log('merged3', merged3);

interface ILength {
    length: number
}

function withCount<T extends ILength> (value: T):{value: T, count: string} {
    return {
        value,
        count: `В значении value ${value.length} символов`
    }
}

console.log('withCount(привет)', withCount('привет'));
console.log('withCount([])', withCount(['мяу', 'гав']));
console.log('withCount(20)', withCount({size: 20, length: 10}));


function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Ammy',
    age: 26,
    job: 'frontend',
}

console.log('getObjectValue(person, name)', getObjectValue(person, 'name'));
console.log('getObjectValue(person, name)', getObjectValue(person, 'job'));

class Collection<T extends number | string | boolean> {
// private _items: T[]=[]
constructor(private _items:T[]=[]) {}
add(item: T) {
    this._items.push(item)
}

remove(item: T) {
    this._items=this._items.filter(i=>i!==item)
}

get items(): T[] {
    return this._items
}
}

const strings = new Collection<string>(['A', 'B','C']);
strings.add('E');
strings.remove('A');
console.log('strings.items', strings.items)
 
const numbers = new Collection<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log('numbers.items', numbers.items)
 
// const objs = new Collection([{a:1}, {b:2}])
// objs.remove({b:2})
// console.log('objs.items', objs.items);

interface Car {
    model: string,
    year: number,
}

function createAndValidateCar (model: string, year: number): Car {
const car : Partial<Car> = {}
if(model.length>=3){
car.model=model;
}
if(year>2000){
car.year=year
}

return car as Car
}

const bestCars: Readonly <Array<string>> = ['ford', 'audi'];
// bestCars.shift();
console.log('bestCars', bestCars);
 
const ford: Readonly <Car> = {
    model: 'ford',
    year: 2018,
} 
// ford.year = 2019