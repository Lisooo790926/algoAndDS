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
        
        if(hashKey && this.data[hashKey]) {
            let valueAry = this.data[hashKey];
            for(let value of valueAry) {
                let strAry = value.split("_")
                if(key == strAry[0]) {
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
        if(!this.data[hashKey]){
            this.data[hashKey] = new Array();
        }
        this.data[hashKey].push(key + "_" + value);

        console.log("save ok in key", key + "_" + value)
    }

}


let hashTable = new HashTable(10);
hashTable.set("key", 2);
console.log(hashTable.get("key"))
