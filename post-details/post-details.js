// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
let id = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {

        // console.log(post)
        let block = document.getElementsByClassName('wrap')[0];
        let div = document.createElement('div');
        div.innerHTML = `<b>userId:</b> ${post.userId};<br>
            <b>id:</b> ${post.id};<br> 
            <b>title:</b> ${post.title}; <br>
            <b>body:</b> ${post.body}`;
        block.appendChild(div);
    })

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comment) => {
        for (const element of comment) {
            // console.log(element)

            let block = document.getElementsByClassName('wrap2')[0];
            let div = document.createElement('div');
            div.className = 'div1';
            div.innerHTML = `<b>postId:</b>${element.postId};<br>
           <b> id:</b> ${element.id};<br>
            <b>name:</b> ${element.name};<br>
           <b> email:</b> ${element.email}`;

            block.appendChild(div);
        }
    });