class Obserable{

    // there is observers list in Observable object
    constructor(){
        this.observers = [];
    }

    addObserver(observer) {
        if(typeof observer === 'function') {
            this.observers.push(observer);
        } else {
            throw new Error('Observer need to be function')
        }
    }

    removeObserver(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    notify(message){
        for(let observer of this.observers) {
            observer(message);
        }
    }
}

var observable = new Obserable();
observable.addObserver((message) => console.log(message));

observable.notify("Hi there")