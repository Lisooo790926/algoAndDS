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
            hash = (hash + key.charCodeAt(i) * i)
            this.data.length;
        }
        return hash;
    }

    get(key) {
        
    }

    set(key, value) {

    }


}
