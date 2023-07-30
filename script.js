const title = document.querySelector('#title')
const author = document.querySelector('#author')
const chapters = document.querySelector('#chapters')
const status = document.querySelector('#status')
const tbody = document.querySelector('tbody')
const submit = document.querySelector('#submit')

const library = [
    {
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        chapters: '700', 
        status: 'Done Reading'
    }, 
    {
        title: 'One Piece',
        author: 'Eiichiro Oda',
        chapters: '1058', 
        status: 'Not Finished'
    }
    
];

function Book(title, author, chapters, status) {
    this.title = title,
    this.author = author,
    this.chapters = chapters, 
    this.status = status 
}

function addBookToLibrary(e){
    const newBook = new Book(title.value, author.value, chapters.value, status.value)
    if (title.value === '' || author.value === '' || chapters.value === '') return; 
    for (items of library) {
        console.log(items.title)
        if (items.title === title.value) {
            console.log('dsadasdsa')
            alert(`${title.value} already exists in your library.`)
            e.preventDefault();
            clearInput();
            return;
        } 
    }

    console.table(library)

    library.push(newBook);
    updateLibrary();
    clearInput();
    e.preventDefault();
    console.table(library)
}

function clearInput() {
    title.value = '';
    author.value = '';
    chapters.value = '';
}

function updateLibrary() {
    let latestBook = library[library.length - 1];
    console.log(latestBook)
        const rowInfo =
            `<tr>
                <td>${latestBook.title}</td>
                <td>${latestBook.author}</td>
                <td>${latestBook.chapters}</td>
                <td><button class='status'>${latestBook.status}</button></td>
                <td><button class='remove'>Remove</button></td>
            </tr>`;
        tbody.insertAdjacentHTML("beforeend", rowInfo);
}

tbody.addEventListener('click', (e) => {
    if (e.target.className === 'remove') {
        console.table(library)
        e.target.parentNode.parentNode.remove();
        library.splice(e.target, 1)
    } else if (e.target.className === 'status') {
        if (e.target.textContent === 'Done Reading') e.target.textContent = 'Not Finished'
        else e.target.textContent = 'Done Reading'
    }
})

function displayBook() {
    library.forEach((book) => {
        const rowInfo =
            `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.chapters}</td>
                <td><button class='status'>${book.status}</button></td>
                <td><button class='remove'>Remove</button></td>
            </tr>`;
        tbody.insertAdjacentHTML("beforeend", rowInfo);
    })
}

displayBook();

submit.addEventListener('click', addBookToLibrary);