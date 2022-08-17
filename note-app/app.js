// Add button
const addBtn = document.getElementById('add');

// Click event listener
addBtn.addEventListener('click', () => addNewNote());


function addNewNote(text= '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = 
        <div class="actions">
            <button class="edit">
            <i class="fas fa-edit">Edit
            </button>

            <button class="delete">
            <i class="fas fa-trash-alt"></i>
            </button>
        </div>

}


