const add = document.querySelector('.add');
const del = document.querySelector('.del');
const input = document.querySelector('.input');
const submit = document.querySelector('.submitted-note');
const author = document.querySelector('.d1');
const title = document.querySelector('.d2');

add.addEventListener('click', () => {
    const newContent = document.createElement('div');
    
    // Create elements for author, title, and content
    const authorElement = document.createElement('h1');
    const titleElement = document.createElement('h2');
    const realContentElement = document.createElement('p');
    const small=document.createElement('div')
    
    // Set the text content for author, title, and content
    authorElement.textContent = author.value;
    titleElement.textContent = title.value;
    realContentElement.textContent = input.value;
    authorElement.classList.add('author')
    titleElement.classList.add('title')
    realContentElement.classList.add('realContent')
    // Append author, title, and content to the new content block
    small.appendChild(authorElement);
    small.appendChild(titleElement);
    small.classList.add('header')
    newContent.appendChild(small)
    newContent.appendChild(realContentElement);

    // Add a class to the new content block for styling
   
    newContent.classList.add('new')
    // Append the new content block to the submitted-note div
    submit.appendChild(newContent);
});

del.addEventListener('click', () => {
    const submittedNote = document.querySelector('.submitted-note');
    const noteToDelete = submittedNote.lastElementChild;
    if (noteToDelete) {
        submittedNote.removeChild(noteToDelete);
    }
});

