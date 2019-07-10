(function () {
    const input = document.getElementById('add-item-input');
    const addBtn = document.querySelector('.add-btn');
    const ul = document.querySelector('.todo-list');

    let taskName = '';

    input.addEventListener('change', ({target: {value}}) => {
        taskName = value;
    })

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const li = document.createElement('li');
        const removeBtn = document.createElement('button');
        const checkBox = document.createElement('input');
        const liText = document.createTextNode(`${taskName}`);
        const removeBtnText = document.createTextNode(` X `);
        removeBtn.classList.add('remove-btn')
        checkBox.setAttribute('type', 'checkbox');


        removeBtn.addEventListener('click', (e) => {
            li.remove();
        })

        checkBox.addEventListener('change', ({ target: {checked}}) => {
            if (checked) {
                li.style.textDecoration = 'line-through';
            }
            else {
                li.style.textDecoration = 'none';
            }
            
        })

        li.appendChild(checkBox);
        li.appendChild(liText);
        li.appendChild(removeBtn);

        removeBtn.appendChild(removeBtnText);

        if (taskName.length >= 3) {
            ul.appendChild(li);
        }
        
        taskName = '';
        input.value = '';
    })
}());