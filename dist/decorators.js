"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
function Log(constructor) {
    console.log('constructor', constructor);
}
function LogInside(target, name) {
    console.log('target', target);
    console.log('name', name);
}
function LogMethodInside(target, name, descriptor) {
    console.log('target', target);
    console.log('name', name);
    console.log('descriptor', descriptor);
}
let LoggedComponent = class LoggedComponent {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log('Component name ', this.name);
    }
};
__decorate([
    LogInside
], LoggedComponent.prototype, "name", void 0);
__decorate([
    LogMethodInside
], LoggedComponent.prototype, "componentName", null);
__decorate([
    LogMethodInside
], LoggedComponent.prototype, "logName", null);
LoggedComponent = __decorate([
    Log
], LoggedComponent);
function decorComponent(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const origin = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return origin.bind(this);
        }
    };
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log('Component name', this.name);
    }
};
__decorate([
    Bind
], Component.prototype, "logName", null);
Component = __decorate([
    decorComponent({
        selector: '#card',
        template: '<div class="card"><div class="card-body"><div class="card-title">Card Component</div><div class="card-text">text</div></div></div>'
    })
], Component);
const myComponent = new Component('My decor Components');
console.log('myComponent', myComponent);
const but = document.querySelector('#btn');
(_a = but) === null || _a === void 0 ? void 0 : _a.addEventListener('click', myComponent.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: 'required' });
}
function validate(obj) {
    const objectConfig = validators[obj.constructor.name];
    if (!objectConfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objectConfig).forEach(key => {
        if (objectConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
const form = new Form('noerror@gmail.com');
if (validate(form)) {
    console.log('valid', form);
}
else {
    console.log('validate Error');
}
