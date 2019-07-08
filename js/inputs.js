(function () {
    const input = document.getElementById('add-item-input');
    const button = document.querySelector('.add-btn');
    const ul = document.querySelector('.todo-list');
    let task = {
        name: '',
        id: null
    };
    input.addEventListener('change', ({target: {value}}) => {
        task.name = value;
    })
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const li = document.createElement('li');
        const liText = document.createTextNode(`${task.name}`);
        li.appendChild(liText);
        ul.appendChild(li);
        task.name = '';
        input.value = '';
    })
}());