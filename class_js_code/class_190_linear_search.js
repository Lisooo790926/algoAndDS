var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

// all behavior are linear search

// return the index
console.log(beasts.indexOf('Godzilla'))

// return the index
console.log(beasts.findIndex(function(item){
    return item === 'Godzilla'
}))

// return the string
console.log(beasts.find(function(item){
    return item === 'Godzilla'
}))

// check if array include
console.log(beasts.includes('Godzilla'))