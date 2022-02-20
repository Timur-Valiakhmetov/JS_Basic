'use strict'
//Ex1 - не пойму почему выводит Object 

/* let userNumber = +prompt ('Введите число от 0 до 999 включительно');
function numberParts (userNumber){
       if (userNumber < 0 || userNumber > 999 || !Number.isInteger(userNumber)) {
        alert ("Введено некорректное число, попробуйте заново!");
        return {};
    } 
        return {
            units: userNumber % 10,
            hundereds: Math.floor(userNumber / 100),
            tens: Math.floor(userNumber / 10) % 10, 
        }   
    
};

alert (numberParts(userNumber)); */

//Ex2

//ES5
/* function Product (name,price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const prod1 = new Product ('Яблоко', 50);
prod1.make25PercentDiscount();

const prod2 = new Product ('Груша', 120);
prod2.make25PercentDiscount();

console.log (prod1);
console.log (prod2); */

//ES6

/* class Product1 {
    constructor (name1, price1) {
    this.name1 = name1;
    this.price1 = price1;
    }
    make25PercentDiscount1() {
        this.price1 = this.price1 - (this.price1 * 25 / 100); 
        }
}

const prod3 = new Product1 ('Яблоко', 50);
prod3.make25PercentDiscount1();

const prod4 = new Product1 ('Груша', 120);
prod4.make25PercentDiscount1();

console.log (prod3);
console.log (prod4);
 */
//Ex3 

//es5
/* function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (corrections) {
    this.text = `${this.text} ${corrections})`;
};

function AttachedPost (author, text, date){
    Post.call (this,author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
} */

//es6

class Post  {
    constructor (author, text, date) {
        this.author = author;
    this.text = text;
    this.date = date;
    }

    edit (text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor (author, text, date) {
        super (author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted () {
        this.highlighted = true;
    }
}


const attached1 = new AttachedPost('Petr', 'Some text', new Date());
console.log (attached1);
attached1.makeTextHighlighted();
attached1.edit ('Some new new text');
console.log (attached1);