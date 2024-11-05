let car = {
    make : "tokiyo",
    modal : "toyoto",
    year : 2024,
    start: function(){
        console.log('the car has started', this.make);
    }
}

console.log(car.make);
console.log(car.year);
console.log(car.modal);

console.log(car.start());
