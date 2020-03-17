var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

//Without Parameter
eventEmitter.on('tutorial', () => {
  console.log('Tutorial event succesfully.');
});
eventEmitter.emit('tutorial')

//With Parameter
eventEmitter.on('tutorial2', (num1,num2) => {
    console.log(num1 + num2);
  });
  eventEmitter.emit('tutorial2',1,2)


class Person extends EventEmitter{
    constructor(name){
        super()
        this._name = name
    }
    get name(){
        return this._name
    }
}

let xyz = new Person('XYZ')
let abc = new Person('ABC')
xyz.on('name',()=>{
    console.log('My Name is ' + xyz.name);
    
})

abc.on('name',()=>{
    console.log('My Name is ' + abc.name);
    
})

xyz.emit('name')
abc.emit('name')