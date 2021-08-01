let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log(123)
    }
}

user.age // O(1)
user.spell = 'aaaaaa' // O(1)
user.scream();

/////////////////////////////////////
// create the HashTable

// my Trial 
class HashTable {

    // get the fix memory size of hashTable
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get(key) {

        const hashKey = this._hash(key)

        if (hashKey && this.data[hashKey]) {
            let valueAry = this.data[hashKey];
            for (let value of valueAry) {
                let strAry = value.split("_")
                // why cannot use ===
                if (key == strAry[0]) {
                    return strAry[1]
                }
            }
        }
        console.log("no key and value")
        return null
    }

    set(key, value) {
        const hashKey = this._hash(key)

        console.log(hashKey);
        if (!this.data[hashKey]) {
            this.data[hashKey] = new Array();
        }
        this.data[hashKey].push(key + "_" + value);

        console.log("save ok in key", key + "_" + value)
    }

}


let hashTable = new HashTable(10);
hashTable.set("key", 2);
console.log(hashTable.get("key"))


console.log("///////////////////")
/////////////////////////////////////////////////
//////////////// class solution /////////////////
/////////////////////////////////////////////////

class HashTable_class {

    // get the fix memory size of hashTable
    constructor(size) {
        this.data = new Array(size);
    }

    // common standard for private method
    // Noramlly we put O(1) for hash function
    _hash(key) {  
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // O(1)
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            // if using array, will be slow for inserting and deleting
            this.data[address] = []
        }
        // use the map object to save item
        this.data[address].push(new Map([[key,value]]))
        console.log(this.data)
    }

    // O(1) when no Collision
    // O(n) when no good hash function, or no enough memory size (with Collision)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address]

        if(currentBucket) {
            for(let map of currentBucket) {
                if(map.get(key)) return map.get(key)
            }
        }
        
        return currentBucket
    }

    // for getting all keys in HashTable
    keys() {
        const keys = []

        // it will loop times which is the memory size
        // need to go through all the memory
        for(let i =0;i<this.data.length;i++) {
            console.log(this.data[i])
            if(this.data[i]) {
                // when Collision happen
                for(let [key, value] of this.data[i]){
                    keys.push(key[0])
                }
            }
        }
        
        return keys;
    }
}

const myHashTable = new HashTable_class(2)
// Collision happen
myHashTable.set("grape", 10000)
myHashTable.set("apple", 2)

console.log(myHashTable.get("grape"))

console.log(myHashTable.keys())
