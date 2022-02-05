class IteratorFromArray {

    constructor(arr) {
        this._array = arr;
        this._cursor = 0;
    }

    next() {
        return this._cursor < this._array.length ?
            {
                value: this._array[this._cursor++],
                done: false
            } : { done: true };
    }

    map(callback) {
        const iterator = new IteratorFromArray(this._array);
        return {
            next: () => {
                var { value, done } = iterator.next();
                return {
                    value: done ? undefined : callback(value),
                    done: done
                }
            }
        }
    }
}

var iterator = new IteratorFromArray([1, 2, 3]);
var newInterator = iterator.map(x => x + 3);

console.log(newInterator.next());
console.log(newInterator.next());
console.log(newInterator.next());
console.log(newInterator.next());

