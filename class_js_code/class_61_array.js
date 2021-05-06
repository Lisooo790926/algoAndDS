// static Array : fix the size (Java : Array)
const strings = ['a','b','c']

// push 
strings.push('e'); // O(1)

// pop
strings.pop() // O(1)

// unshift 追加弟一個
// x , a , b , c
strings.unshift('x'); // O(n)
console.log(strings);

// splice (first attribute is start, second is deleted number of elements)
strings.splice(0,3,'ccc'); // O(n)
console.log(strings);


// Dynamic array : the size is dynamic (Java : ArrayList)
// javaScript always dynamic