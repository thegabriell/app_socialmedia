const postInput = document.getElementById('post-cont');
const postSave = document.getElementById('post-btn');
const postItem = document.getElementById('item-post');

postSave.addEventListener('click',()=>{
    const postContent = postInput.value.trim();

    if(postContent !== ''){
        const postCt = document.createElement('p');
        postCt.className = 'post-item';
        postCt.textContent = postContent;

        postItem.appendChild(postCt);
    }

    else{
        alert('campo vazio');
    }
});