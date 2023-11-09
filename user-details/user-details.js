// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
let userId = new URL(location.href).searchParams.get('userId');

let us = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        // console.log(user);
        let block = document.getElementsByClassName('wrap')[0];
        let ul = document.createElement('ul');
        recursiveBuild(user, ul);
        block.appendChild(ul);
    });

function liCreator(key, value, parent) {
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulBuilder(key, object, parent) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}

function recursiveBuild(object, parent) {
    for (const element in object) {
        typeof object[element] === 'object'
            ? ulBuilder(element, object[element], parent)
            : liCreator(element, object[element], parent)
    }
}

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
let div = document.getElementsByClassName('button')[0];
let button = document.createElement('button');
button.className = 'btn1';
button.innerText = `post of current user`;
div.appendChild(button);
button.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((posts) => {

            let block = document.getElementsByClassName('wrap2')[0];
            //// 1 version
            // if (block.innerHTML !== '') {
            //     return; // Якщо вміст вже присутній, вихід з функції
            // }
            //// 2 version
            // block.innerHTML = '';

            for (const post of posts) {
                // console.log(post);

                let div = document.createElement('div');
                div.className = 'div1';
                div.innerHTML = `&#9679   ${post.title}`;
                block.appendChild(div);
                //     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
                let button = document.createElement('button');
                button.className = 'btn';
                button.innerText = 'infPost';
                div.appendChild(button);
                button.onclick = () => {
                    location.href = `../post-details/post-details.html?id=${post.id}`;
                }
            }
        });
button.disabled = true;
}


