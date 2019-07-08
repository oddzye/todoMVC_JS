(function () {
    const input = document.getElementById('add-item-input');
    const button = document.querySelector('.add-btn');
    const ul = document.querySelector('.todo-list'); 
    let inputValue = '';
    input.addEventListener('change', ({target: {value}}) => {
        inputValue = value;
        console.log(inputValue);
    })
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const li = document.createElement('li');
        const liText = document.createTextNode(`${inputValue}`);
        li.appendChild(liText);
        ul.appendChild(li);
        inputValue = '';
        input.value = '';
    })

}());