// RX Observable is totally different between normal Observer Pattern
// 

var observable = Rx.Observable.create(
    function(observer) {
        observer.next('Jerry'); 
        observer.next('Anna');
        observer.complete();
        observer.next('not work');
    }
)

var observable2 = Rx.Observable.create(
    function(observer) {
        try{
            observer.next('Jerry'); 
            observer.next('Anna');
            throw new Error();
        } catch(e){
            observer.error('Error');
        }
        
    }
)

var observer = {
    next: (value) => {
        console.log(value);
    },

    complete: () => {
        console.log('end');
    },

    error: (error) => {
        console.log(error);
    }
}

// observable has been subscribed by using observer
observable.subscribe(observer);
/*
 Jerry
 Anna
 end 
*/

observable2.subscribe(observer); 
/*
 Jerry
 Anna
 Error
*/
