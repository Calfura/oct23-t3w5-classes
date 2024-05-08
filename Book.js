const { Media } = require("./Meida");


class Book extends Media {
    constructor(newName,newEdition = "first") {
        super(newName);

        this.edition = newEdition;
    }
}

module.exports = {
    Book
}