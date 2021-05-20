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

addBookToLibrary(theHobbit);
console.table(myLibrary);
//console.log(theHobbit.bookInfo());