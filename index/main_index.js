// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {

// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.

        let block = document.getElementsByClassName('wrap')  [0];

        // console.log(users)
        for (const element of users) {
            // console.log(element)
            let div = document.createElement('div');
            div.innerHTML = ` <b>id:</b>${element.id} <b> <br> name:</b>${element.name}`;
            block.appendChild(div)

            // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
            // котра має детальну інфорацію про об'єкт на який клікнули
            let button = document.createElement('button');
            button.innerText = 'information';
            block.appendChild(button);

            button.onclick = () => {
                location.href = `../user-details/user-details.html?userId=${element.id}`;
            }
        }
    });





