const studentRecord = document.querySelector('.student-list')
const studentList = studentRecord.children

const page = 1; // this is to make the first 10 cards appear as initially cards would only appear when you click the buttons 


const showPage = (list, page) => {
    for (let i = 0; i < list.length; i++) {
    if (i < (page) * 10 || i > (page) * 10 + 9) {
    list[i].style.display = "none"
    }
    else {
    list[i].style.display = "block"
    }
    }
   };


   const appendPageLinks = (list) => {
    const totalPages = Math.ceil(list.length / 10); //adjusted this to show 10 pages per page
    console.log(totalPages);
    const ItemList = document.querySelector('div.pagination');
    for (let i = 1; i <= totalPages; i++) {
    var addbutton = document.createElement('li');
    addbutton.innerHTML = '<a class="active" >' + i + '</a>';
    ItemList.appendChild(addbutton)
    }
    var itembuttons = document.querySelectorAll('.active');
    console.log(itembuttons.length);
    for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].classList.remove('active')
    }
    for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].addEventListener('click', () => {
    showPage(studentList, i);
    itembuttons[i].classList.remove('active');
    })
    }
   }



   const init = () => {
    const total = users.length
    for (i = 0; i < user.length; i++) {
    document.querySelector('.student-list').innerHTML += renderUser(users[i])
    }
    document.querySelector('.total').innerText = `Total: ${total}` // inital line

   }

   const renderUser = (user) => {
    return `
    <li class="student-item cf">
    <div class="student-details">
    <img class="avatar" src="${user.picture.thumbnail}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <span class="email">${user.email}</span>
    </div>
    <div class="joined-details">
    <span class="date">Joined ${new
   Date(user.registered.date).toLocaleDateString('en-US')}</span>
    </div>
    </li> `
   }

showPage(studentList, page)
appendPageLinks(studentList)
init()
