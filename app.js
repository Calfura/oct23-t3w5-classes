
// Impoprt library class, Book class, Audio book class, Games class, Movies class, Music class

const { Book } = require("./Book");
const { Library } = require("./Library");
const { Media } = require("./Meida");

// Create instances of classes 

// let lotr = new Media("Fellowship of the Ring");
let lotr = new Book("Fellowship of the Ring", "Fancy")



console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Lord of the rings as a instance of book class

// Do things with those isntaces

// Create an instance of a library
// add media instances into tthe Library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// Log the data in the Library

console.log(libraryInstance);

console.log(libraryInstance.books[0].name);

let lotr2 = new Book("The Two Towers", "fancy");

console.log(libraryInstance.books.length);
console.log(Book.count);
lotr2 = null;
Book.removeBook();
console.log(Book.count);

console.log(libraryInstance.books[0].getBookName());
