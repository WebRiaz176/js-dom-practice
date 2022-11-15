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