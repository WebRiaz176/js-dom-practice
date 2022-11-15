//section-1
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const makeRed = document.getElementById('make-red');
makeRed.onclick=makeRedd;

function makeRedd(){
    document.body.style.backgroundColor = 'red';
}

const makeYellow = document.getElementById('make-yellow');
makeYellow.onclick= function(){
    document.body.style.backgroundColor = 'yellow';
}


const makePurple = document.getElementById('make-purple');
makePurple.addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple';
})

const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePink1);

function makePink1(){
    document.body.style.backgroundColor = 'pink';
}

document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})



//section-2
function onClickHandle(){
    const onclickHandle = document.getElementById('event-handle');
    onclickHandle.innerText ='change by js';

}

document.getElementById('add-event').addEventListener('click', function addEvent(){
    const addEvent = document.getElementById('event-handle');
 addEvent.innerText = 'chnge by js pro';
})


//section-3
document.getElementById('event-add').addEventListener('click', function(){
    const inputField = document.getElementById('input-text');
    const inputText = inputField.value;

    const p = document.getElementById('para');
    p.innerText=inputText;
    inputField.value='';
})


