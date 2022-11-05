import { extend } from './core';

export function formatCSSKey(key) {
    let indexs = [];
    let position = key.indexOf('-');
    while (position !== -1) {
        indexs.push(position);
        position = key.indexOf('-', position + 1);
    }
    const arr = Array.from(key);
    indexs.forEach((index) => {
        arr[index] = ' ';
        arr[index + 1] = arr[index + 1].toUpperCase();
    });
    return arr.join('').replaceAll(' ', '');
}

export function event(event) {
    extend(event, {
        get: function get() {
            this.dispatchEvent(new Event(event));
        },
        set: function set(handler) {
            this.addEventListener(event, handler);
        },
    });
}
