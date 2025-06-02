import {makeAutoObservable} from 'mobx';

export classnamename AppStore {
    count = 0;

    greeting: string = 'hello'

    constructor() {
        makeAutoObservable(this);
    }

    setGreeting(greeting: string) {
        this.greeting = greeting;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export const appStore = new AppStore();
