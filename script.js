const inputBox = document.getElementById('input-box'); // input box with id "input-box"
const listcontainer = document.getElementById('list-container'); // ul with id "list-container

function addTask (){
    if(inputBox.value === '') {
        alert('Please enter a task to add');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7" //hex code for X button
        li.appendChild(span);
    }

    inputBox.value = ''; // to clear the textbox after adding a task
    saveData(); // save the task even if the page is reloaded or reopned
}

listcontainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // toogling the classlist  obj with checked className
        saveData(); //saving the checked and unchecked data
    }
    else if (e.target.tagName === 'SPAN'){ // toogling the span X icon
        e.target.parentElement.remove(); // removing the element inside the parent element list-container
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data",listcontainer.innerHTML); //calling the localStorage.setItem to save the data inside the parent element list-container
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data"); //calling the localStorage.setItem to display the data in the list-container
}
showTask(); // calling the localStorage.setItem to display the data in the list-container