// async function test1() {
//   console.log("test1 function ");
//   await wait(2000);
//   console.log("after test1 wait");
//   return "hello world test1";
// }

// function wait(ms) {
//   return new Promise((r) => {
//     console.log(ms + " test waitting");
//     // use normal function instead of resolve
//     setTimeout(() => console.log("normal wait"), ms);
//   });
// }

async function test2() {
  console.log("test2 function ");
  let result = await wait2(2000);
  return result;
}

function wait2(ms) {
  return new Promise((resolve) => {
    console.log(ms + " test2 waitting");
    // use resolve to let string pass to result
    setTimeout(() => resolve("hello world from resolve"), ms);
  });
}

// test1().then((result) => console.log(result));
test2().then((result) => console.log(result));


// This is totally wrong for async
async function test3() {
  console.log("test3 function ");
  // this await has no function 
  // because await is waitting for Promise object, not the normal string
  let result = await wait3(2000); 
  
  // althought here will return Promise object, but no wait for 2 sec! 
  return result;
}

function wait3(ms) {
  // here will wait but not block orignal chain!!
  setTimeout(() => console.log("hello world from resolve3"), ms);
  return 'hello world'
}

test3().then((result) => console.log(result));
