let myLibrary = [''];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readStatusText = this.readStatus ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pageCount} pages, ${readStatusText}`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';
})

document.querySelector('new-book-form').addEventListener('submit', function(){
    event.preventDefault();
    alert('HELLO WORLD');
})
