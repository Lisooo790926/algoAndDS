// use curring
var curriedFetchData = async () => {
    var result = {
      data: "Hello, World",
    };
    await wait(2000);
    return result.data;
  };
  
  function showResult(result) {
    console.log("The result is: " + result);
  }
  
  curriedFetchData().then((data) => {
    showResult(data); // The result is: Hello, World!
  });
  
  function wait(ms) {
    return new Promise((r) => {
      console.log(ms + " waitting");
      setTimeout(r, ms);
    });
  }
  
  async function test() {
    await wait(2000);
    return "Hello World"
    // throw Error("error throwing")
  }
  
  test()
  .then((result)=> console.log(result))
  .catch((error)=> console.log(error));
  