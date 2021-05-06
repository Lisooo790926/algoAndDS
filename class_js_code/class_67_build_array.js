class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) { // O(1)
        return this.data[index];
    }

    push(item) { // O(1)
        this.data[this.length] = item;
        this.length++;
        console.log(this)
    }

    pop() { // O(1)
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        console.log(this)
    }

    delete(index) { // O(n)
        const deleteItem = this.data[index]
        this.shiftItems(index, true);
        console.log(this)
    }

    insert(index, item) { // O(n)
        this.shiftItems(index, false)
        this.data[index] = item
        console.log(this)
    }

    // shift the item back or front
    shiftItems(index, isRemove) { 
        const lastItem = this.data[this.length - 1];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = isRemove ? this.data[i + 1] : this.data[i - 1]
        }
        if(isRemove){
            delete this.data[this.length - 1]
            this.length--
        } else {
            this.data[this.length] = lastItem
            this.length++
        }  
    }

}

const newArray = new Array();

newArray.push('no');
newArray.push("hey");
newArray.push('bro');
newArray.get(0)
newArray.pop()
newArray.push('bro');
newArray.insert(2,'big');
newArray.delete(2);



