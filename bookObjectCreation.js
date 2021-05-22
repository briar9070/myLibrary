let myLibrary = []; //empty array to store the inputted books.

function CreateBook (title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}
 function addBookToLibrary (bookToAdd){
    for(const key in bookToAdd){ //key will change to each of the properties. In is made for objects 
        if (bookToAdd.hasOwnProperty(key)){//this ensures that we only iterate over properties that are not inherited
            myLibrary.push(`${key}:${bookToAdd[key]}`) //the final bookToAdd[key] must be in square brackets. dot notation does not work
        }
        
    }
 }
let theHobbit = new CreateBook("The Hobbit", "JRR Tolkien", 310, "yes" );
let harryPotter = new CreateBook("The Philosipher's Stone", " JK Rowling", 223, "yes");
let thursdayMurderClub = new CreateBook("The Thursday Murder Club", "Richard Osman", 400, "yes");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(thursdayMurderClub);
console.table(myLibrary);


let libraryContainer = document.querySelector("#libraryContainer");

function addBookToDom (bookName){
    let newBookCard= document.createElement("div"); //creating a blank div. This will create a single div for each book to live in individually.
    newBookCard.classList.add(`newBook`); //adding on a class so that they can all be referenced in the CSS sheet. uses the book name so they can be individually deleted later on
    libraryContainer.appendChild(newBookCard); //attaches the new div to the overarching library container.
    for (const key in bookName) {
        let newDomBook = document.createElement("div");
        newDomBook.textContent = `${key}:${bookName[key]}`;
        newBookCard.appendChild(newDomBook);
    }
    
}