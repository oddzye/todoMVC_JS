(function () {
    const input = document.getElementById('add-item-input');
    const button = document.querySelector('.add-btn');
    const ul = document.querySelector('.todo-list');
    const removeBtn = document.querySelector('.remove-btn');

    let taskName = '';

    let tasks = [];

    input.addEventListener('change', ({target: {value}}) => {
        taskName = value;
    })

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const li = document.createElement('li');
        const removeBtn = document.createElement('button');
        const checkBox = document.createElement('input');
        const liText = document.createTextNode(`${taskName}`);
        const removeBtnText = document.createTextNode(` X `);
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
 

        

        
        removeBtn.appendChild(removeBtnText);

        li.appendChild(checkBox);
        li.appendChild(liText);
        li.appendChild(removeBtn);
        
        

        ul.appendChild(li);

        tasks.push(taskName);

        taskName = '';
        input.value = '';
    })
}());