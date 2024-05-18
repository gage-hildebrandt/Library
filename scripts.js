let myLibrary = [''];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;

    this.info = function() {
        let readStatusText = this.readStatus ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pageCount} pages, ${readStatusText}`;
    };
}

function addBookToLibrary(title, author, pages, read) {

}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';
})