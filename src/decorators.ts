function Log(constructor: Function) {
console.log('constructor', constructor);

}

function LogInside(target: any, name: string | symbol) {
    console.log('target', target);
    console.log('name', name);
}

function LogMethodInside(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log('target', target);
    console.log('name', name);
    console.log('descriptor', descriptor);
    
}

@Log
class LoggedComponent {
    @LogInside
name: string
constructor(name:string){
    this.name = name
}

@LogMethodInside
get componentName(){
    return this.name
}

@LogMethodInside
logName(): void {
    console.log('Component name ', this.name);  
}
}

interface Idecor {
    selector: string,
    template: string,
}

function  decorComponent(config: Idecor) {
    return function <T extends {new(...args: any[]): object}> (Constructor: T ) {
        return class extends Constructor {
             constructor(...args: any []){
                 super(...args)
                 const el = document.querySelector(config.selector)!
                 el.innerHTML = config.template
             }
    }
}
}

function Bind(_:any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const origin= descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get () {
            return origin.bind(this)
        }
    }
}

@decorComponent({
selector: '#card',
template: '<div class="card"><div class="card-body"><div class="card-title">Card Component</div><div class="card-text">text</div></div></div>'
})

class Component {
    constructor(public name: string){}
    @Bind
    logName(): void {
        console.log('Component name', this.name);
    }
}

const myComponent = new Component('My decor Components');
console.log('myComponent', myComponent);

const but = document.querySelector('#btn');
but?.addEventListener('click', myComponent.logName)

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: ValidatorConfig = {}

function Required(target:any, propName: string) {
    validators[target.constructor.name]= {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}

function validate(obj:any): boolean{
    const objectConfig = validators[obj.constructor.name]
    if(!objectConfig){
    return true
    } 
        let isValid=true
        Object.keys(objectConfig).forEach(key=>{
            if(objectConfig[key]==='required'){
                isValid=isValid && !!obj[key]
            }
        })
        return isValid
}

class Form {
    @Required
    public email: string | void

    constructor(email?: string){
        this.email = email
    }
}

const form = new Form('noerror@gmail.com');
if(validate(form)){
    console.log('valid', form);
} else {
    console.log('validate Error');
}
 