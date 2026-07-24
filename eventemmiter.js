import { EventEmitter } from "node:events";
const login = (name) => {
     console.log(`${name} logged in`);
};
  
const start = () => {
 console.log("system starts ");

};
const working = (name) => {
    console.log(`${name} add items to cart`);

};
const checkout = (name) => {
    console.log(`${name} adds added to cart`);

};

const task = new EventEmitter();
task.on("great" ,login);
  
task.emit("great", "Aditya Saxena");

