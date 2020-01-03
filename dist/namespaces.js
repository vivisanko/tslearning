"use strict";
/// <reference path="form-namespace.ts">
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    IForm.nameForm = new MyForm('namespase@gmail.com');
})(IForm || (IForm = {}));
console.log('IForm.nameForm', IForm.nameForm);
