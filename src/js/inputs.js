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
        checkBox.setAttribute('type', 'checkbox');
        console.dir(checkBox);

        removeBtn.addEventListener('click', (e) => {
            li.remove();
        })

 

        const liText = document.createTextNode(`${taskName}`);
        const removeBtnText = document.createTextNode(` X `);

        
        removeBtn.appendChild(removeBtnText);

        li.appendChild(checkBox);
        li.appendChild(liText);
        li.appendChild(removeBtn);
        
        

        ul.appendChild(li);

        tasks.push(taskName);
        console.log(tasks);

        taskName = '';
        input.value = '';
    })
}());