let myLibrary = []; //empty array to store the inputted books.

let identNumber = 1;

function CreateBook (Title,Author,Pages,Read) {
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
    
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

//adding book to the DOM. Each created item has its own card with the class 'newBook'
let libraryContainer = document.querySelector("#libraryContainer");

function addBookToDom (bookName){
    let newBookCard= document.createElement("div"); //creating a blank div. This will create a single div for each book to live in individually.
    newBookCard.classList.add(`newBook`); //adding on a class so that they can all be referenced in the CSS sheet. uses the book name so they can be individually deleted later on
    newBookCard.setAttribute('id',`newBook ${identNumber}`);
    libraryContainer.appendChild(newBookCard); //attaches the new div to the overarching library container.
    
    let cancelButton = document.createElement('button'); //adding in the x button in above the book info.
    cancelButton.classList.add('removeEntry');
    cancelButton.setAttribute('id',`removeThisEntry ${identNumber}`)
    cancelButton.textContent= 'X';
    newDomBook = document.getElementById(`newBook ${identNumber}`);
    newDomBook.appendChild(cancelButton);

    //need to add in the event listener as the cancel button is added to the DOM
    cancelButton.addEventListener('click', function(e){
        thisButton = e.originalTarget; //pulls out the button in the Dom
        elementToDelete = thisButton.parentElement; //pulls out the element which is parent to thisButton.
        elementToDelete.remove() //item to remove is on the left! no need to input to the function
        console.log(e);
    });
    
    for (const key in bookName) { //cycling through all items in the proposed object and adding them to their own div
        let newDomBook = document.createElement("div");
        newDomBook.setAttribute('id','inputtedData');
        newDomBook.textContent = `${key}: ${bookName[key]}`;
        newBookCard.appendChild(newDomBook);
    }
    return identNumber++;
}

let addNewBookButton = document.querySelector("#addNewBookButton"); //defining the new book button. The 'plus' on the main page.
let formDiv = document.querySelector("#formContainer"); //selecting the whole form

addNewBookButton.addEventListener('click', () => {
    if (formDiv.style.display === 'none'){ //if the form is invisible (none) it will be changed to block. and vice verca in the else
        formDiv.style.display = 'block';
    }
    else {
        formDiv.style.display = 'none';
    }
})

//Adding eventlistener to the submit new book button. Will invoke addBookFromButton. DOMContentLoaded means the 
document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded is once the page is loaded. once page is loaded the clock is added to the submit new button
    document.getElementById('submitNewBookButton').addEventListener('click', addBookFromButton); //calls below function. Note that brackets are not required on the function
})

function addBookFromButton(e){
    e.preventDefault(); //prevents the button from doing it's normal stuff and submitting the data to the ether
    title = document.getElementById('bookName').value; // once button pressed, reaches into the designated input and pull out the .value
    author = document.getElementById('authorName').value;
    pages = document.getElementById('numberOfPages').value;
    if (document.getElementById('bookRead').checked == true){ //check boxes have boolean for if checked. 
        read = 'Yes';
    }
    else read = 'No';
  

    let newBook = new CreateBook(title,author,pages,read);
    addBookToDom(newBook); //adding the new book to the DOM
    document.getElementById('bookName').value = ""; //the below clears the input values in the form. without this the old values stay meaning the user has to delete them
    document.getElementById('authorName').value = "";
    pages = document.getElementById('numberOfPages').value = "";
    document.getElementById('bookRead').checked = false;
}

//adding event listener to the delete button with the function of deleting the parent node of event.
/*let parentElementToDelete = document.get
let cancelButtons = document.querySelectorAll('.removeEntry');
cancelButtons.forEach(function(cancelButton){
    cancelButton.addEventListener('click', deleteParentNode,false)
})

function deleteParentNode (e){
    e.parentNode.parentNode.removeChild(e.parentNode);
} */