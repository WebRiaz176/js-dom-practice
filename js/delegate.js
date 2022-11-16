console.log('hello');

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
    console.log(event.target);
})

document.getElementById('add-item').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText='brand new item';
    li.classList.add('item');
    listContainer.appendChild(li);
})