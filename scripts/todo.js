function addtodo() {
    let input = document.getElementById('input-text').value;
    if (input == null || input == "") {
        alert('You must enter some text.');
    } else {
        
        let saved = localStorage.getItem('tasks');

        let textNode = document.createTextNode(input);

        //main container
        let main = document.getElementById('todo-list');
        if (saved) {
            main.innerHTML = saved;
        }

        //flex container
        let flexContainerDiv = document.createElement('div');
        flexContainerDiv.setAttribute('class', 'flex-container');

        //todo-text container
        let todotext = document.createElement('div');
        todotext.setAttribute('class', 'todo-text');

        flexContainerDiv.appendChild(todotext);

        //add actual text
        let p = document.createElement('p');
        p.appendChild(textNode);
        todotext.appendChild(p);

        //buttons container
        let todoBtns = document.createElement('div');
        todoBtns.setAttribute('class', 'todo-btns');

        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'btn');
        removeBtn.setAttribute('id', 'removeBtn');
        removeBtn.setAttribute('onclick', 'remove(this);');
        let removeSpan = document.createElement('span');
        removeSpan.setAttribute('class', 'glyphicon glyphicon-remove');

        //completed button
        let completedBtn = document.createElement('button');
        completedBtn.setAttribute('class', 'btn');
        completedBtn.setAttribute('id', 'completeBtn');
        completedBtn.setAttribute('onclick', 'complete(this);');
        let completedSpan = document.createElement('span');
        completedSpan.setAttribute('class', 'glyphicon glyphicon-check');

        removeBtn.appendChild(removeSpan);
        completedBtn.appendChild(completedSpan);

        todoBtns.appendChild(removeBtn);
        todoBtns.appendChild(completedBtn);

        flexContainerDiv.appendChild(todoBtns);

        //add everything to the main container
        main.appendChild(flexContainerDiv);

        //clear input box
        document.getElementById('input-text').value = "";

        //localstorage

        localStorage.setItem('tasks', main.innerHTML);
    }

}

function remove(task) {

    task.parentNode.parentNode.remove();

    //update localstorage
    let main = document.getElementById('todo-list');
    localStorage.setItem('tasks', main.innerHTML);
}

function complete(button) {
    button.style = 'color: green';

    let children = button.parentNode.parentNode.children;
    children[0].children[0].style = 'text-decoration: line-through';

    //update localstorage
    let main = document.getElementById('todo-list');
    localStorage.setItem('tasks', main.innerHTML);
}

function clearStorage() {
    localStorage.clear('tasks');
    show();
}

function show() {
    let saved = localStorage.getItem('tasks');
    let h1 = document.createElement('h1');
    let msg = document.createTextNode('allo');
    h1.appendChild(msg);

    let main = document.getElementById('todo-list');
    main.innerHTML = saved;
}
