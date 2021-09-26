// method 1, use object map to achieve
var shippingMap = {
    ups : () => {
        return 30;
    },
    usps : () => {
        return 40;
    }
}

// method 2, use prototype to setStrategy
var shipping = function() {
    // define initial 
    this.company = "";
}

shipping.prototype = {
    setStrategy : (company) => {
        this.company = company;
    },
    calculate : ()=> {
        return this.company.calculate();
    }
}

var ups = {
    calculate : ()=> {
        return 30;
    }
}

var usps = {
    calculate : ()=> {
        return 40;
    }
}

function run(){
    // method 1
    console.log("shipping price" , shippingMap["ups"]())
    console.log("shipping price" , shippingMap["usps"]())

    console.log("----------------- ---------------------------")
    // method 2 
    // only define as function, can use new !!
    var ship = new shipping();
    ship.setStrategy(ups)
    console.log("shipping price" , ship.calculate());
    ship.setStrategy(usps)
    console.log("shipping price" , ship.calculate());
}

run()