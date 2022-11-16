
document.getElementById('btn-box').addEventListener('click', function(){
    const secret = document.getElementById('heading-text');
    secret.style.display='none';
})

document.getElementById('input-text').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-box');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }

    else{
        deleteButton.setAttribute('disabled', true);
    }
})