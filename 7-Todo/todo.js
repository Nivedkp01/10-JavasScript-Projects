const todos = document.querySelector('.todos'); // Get the element where todo items will be appended

document.querySelector('.btn').addEventListener('click', () => {
    const todoItem = document.createElement('li'); 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('round')
    todoItem.appendChild(checkbox);

    const textSpan = document.createElement('span');
    const value = document.querySelector('.inp').value;
    const btn = document.createElement('button');
    btn.classList.add('btncls')
    btn.textContent = 'X';
    textSpan.textContent = value;

    todoItem.appendChild(textSpan);
    todoItem.appendChild(btn);

    document.querySelector('.inp').value = '';
   
    todoItem.classList.add('todoStyle');
    todos.appendChild(todoItem);
    
    btn.addEventListener('click', () => {
        todoItem.remove(); // Remove the todo item when the delete button is clicked
    });

    // Add event listener for the checkbox
    checkbox.addEventListener('change', () => {
        textSpan.classList.toggle('complete'); // Toggle the 'complete' class on the todo item's text
    });
});


// function saveData()
// {
//     localStorage.setItem('data',todoItem.innerHtml);
// }

// function showData()
// {
//     todoItem.innerHtml=localStorage.getItem('data')
// }

// showData();