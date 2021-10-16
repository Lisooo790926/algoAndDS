function addTo88(n){
    console.log("spend long time")
    return n + 88;
}

// this is really powerful
function memoizedAddTo88(){
    // use closure and avoid global scope 
    let cache = {};

    // this closure can use the same cache object
    return (n) => {
        if(n in cache) {
            console.log("having cache")
        } else {
            cache[n] = addTo88(n)
        }
        return cache[n]
    }
}

var inner_AddTo88 = memoizedAddTo88()
inner_AddTo88(5)
inner_AddTo88(5)
inner_AddTo88(5)