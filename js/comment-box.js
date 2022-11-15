document.getElementById('btn-box').addEventListener('click', function(){

    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    const paraCpmment = document.getElementById('comment-add');
    const pq = document.createElement('p');
    pq.innerText = newComment;

    paraCpmment.appendChild(pq);
    commentBox.value ='';
})