console.log('app.ts');

class Person {
    constructor(private name: string){}
};

const nick = new Person("Nick");
const btn = document.querySelector('#btn') !;
    btn.addEventListener('click', () => {
        console.log('btn click');
    });


