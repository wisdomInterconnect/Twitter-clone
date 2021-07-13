//woking on Twitterclone Landing page
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content')
const btnTop = document.querySelector('.btn-top');
const feedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal-header i');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalPostBtn = document.querySelector('.modal-header button');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
console.log(user);
const sideBar = document.querySelector('.sidebar');
console.log(sideBar);
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
console.log(sidebarWrapper);
const sidebarClose = document.querySelector('.sidebar-header i');
console.log(sidebarClose);


//function go to page
goToPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}
middleContent.addEventListener('click', (e) => {
        if (e.target.classList[1] === 'main-btn') {
            goToPage()
        }

    })
    //login function
btnTop.addEventListener('click', () => {
        const userInfo = document.querySelector('.user-info');
        const password = document.querySelector('.password');
        if (userInfo.value !== '' && password.value !== '') {
            mainPage.style.display = 'none';
            feedPage.style.display = 'block'

        } else {
            goToPage();
            loginModal.style.display = 'block'
        }

    })
    //close modal
modalX.addEventListener('click', () => {
        loginModal.style.display = 'none'
    })
    //loginFormBtn
loginFormBtn.addEventListener('click', () => {
        const userLoginIfo = document.querySelector('.login-user-info');
        const userPassword = document.querySelector('.login-password');
        if (userLoginIfo.value !== '' && userPassword.value !== '') {
            loginPage.style.display = 'none';
            feedPage.style.display = 'block'
        } else {
            loginModal.style.display = 'block'
        }
    })
    //News feed page
    //post
postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display')

})
closeIcon.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display')
    if (modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5)
    }

})

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;

}
modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changeOpacity(1)
    }
})
modalInput.addEventListener('blur', (e) => {
        if (e.target.value === '') {
            changeOpacity(0.5)
        }
    })
    //sidebar
user.addEventListener('click', () => {
    sideBar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display')

})
sidebarClose.addEventListener('click', () => {
    sideBar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display')

    // sidebarWrapper.classList.remove('sidebar-wrapper-display')
})





// let name = "wisdom";
// console.log(name);
// console.log(typeof name);
// let number = 30;
// console.log(number);
// console.log(typeof number);
// let bool = true;
// console.log(typeof bool);
// let a;
// console.log(typeof a);
// let b = null;
// console.log(b);
// console.log(typeof b);
// //comparism
// let addition = 5 * 5;
// console.log(addition);
// let number1 = 10
// let number2 = 20

// const total = number1 <= number2;
// console.log(total);
// //type cosis
// let typeNumber = 10 + 3 + '10';
// console.log(typeNumber);
// //conditional
// let gender = 'male';
// let name2 = 'wisdom';
// if (gender === 'female') {
//     console.log(name2 + ' is not a female');
// } else {
//     console.log(name2 + ' is a male');
// }
// let profession = 'intructor';
// if (profession === 'Teacher') {
//     console.log('mr John ' + profession + ' English Language');
// } else if (profession === "intructor") {
//     console.log('mr Bassey ' + profession + ' English Language');
// } else {
//     console.log('Mr Dapo ' + profession + ' Nothing');
// }
// // &&, ||, !
// if (!5 == 4) {
//     console.log('condition is true');
// } else {
//     console.log('condition not true');
// }
// //function
// function UnverExam(name, score) {
//     let cutoffMark = 71;
//     let collegemark = 51
//     if (score >= cutoffMark) {
//         console.log(name + ' University cutOffMark is ' + score + ' Passed');
//     } else if (score >= collegemark) {
//         console.log(name + ' College cutoffmark is ' + score + ' Passed');
//     } else {
//         console.log(name + ' Not Qualify ' + score + ' Fail');
//     }
// }
// UnverExam('pato', totalScore(20, 40))

// function totalScore(techicalTest, iQTest) {
//     let score = techicalTest + iQTest
//     return score

// }
// let multipy = function(x, y) {
//     let a = x * y;
//     return a
// }
// console.log(multipy(5, 6));
// let substrat = (h, m) => {
//     return h - m
// }
// console.log(substrat(9, 6));
// let someArray = ['ann', 'John', 'Run', ['comr', 'go', 'to'], 'Joh', 'fast']
// console.log(someArray[3])
// let color = ['White', 'Blue', 'Light', 'Yellow', 'Green']
// console.log(color.push('red'));

// console.log(color);
// console.log(color.indexOf('Yellow'));
// //object
// let person = {
//     name: 'frday',
//     age: 12
// }
// person.name = 'wisdom'
// person['name'] = 'okon'
// person.son = 'new'
// console.log(person);
// let object = {
//     myFunc() {
//         console.log('Hi there');
//     }
// }
// object.myFunc()
//     //loop
// let itemArr = ['John', 'Bassey', 'joy', 'wisdom', 'tunde'];
// for (let i = 0; i < itemArr.length; i++) {
//     if (itemArr[i] === 'Bassey') {
//         console.log(itemArr[i] + ' is my Bnest friend');
//         continue

//     } else {
//         console.log(itemArr[i] + 'is my not best friend');
//     }

// }
// let y = 0;
// while (y <= 10) {

//     console.log(y);
//     y++
// }
// let u = 0;
// do {
//     console.log(u);
//     u++
// } while (u <= 4)
// //template literal
// const namereson = 'Job';
// const age = 20;
// const profession1 = 'Developer'

// function temp() {
//     console.log(namereson + ' is a ' + age + " and " + profession1);

// }
// temp()

// function temp() {
//     console.log(`${namereson}  is a  ${age} and ${profession1}`);

// }
// temp()
//     //dom document object moudel
//     // const header = document.getElementById('header');
//     // console.log(header);
//     // const header2 = document.getElementById('header1');
//     // console.log(header2);
//     // let under = document.getElementById('under');
//     // console.log(under.textContent);
//     // under.textContent = 'friday'
//     // console.log(under.innerHTML);
//     // under.innerHTML = '<h1>Home</h1>'
// let list = document.querySelectorAll('.list li');
// list[0].style.color = 'green'
// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = 'red'
// }
// list[1].style.cssText = 'background-color: coral; color:white; font-size:25px'
// console.log(list);
// let heading1 = document.querySelector('.head')
// console.log(heading1);
// let but = document.querySelector('.but')
// but.addEventListener('click', (e) => {
//     // heading1.style.cssText = 'background-color: brown; color:white'
//     console.log(e.target);
// })
// const para = document.querySelector('.paragraphy');
// console.log(para.getAttribute('id'));
// para.setAttribute('style', 'background-color: red');
// para.removeAttribute('style', 'background-color:red')
// const listItem = document.getElementById('list');
// console.log(listItem.parentElement);
// let list1 = document.querySelector('.list');
// console.log(list1.childNodes);
// console.log(list1.children);
// console.log(list1.firstElementChild);
// console.log(list1.lastElementChild);
// console.log(list1.previousElementSibling);
// console.log(list1.nextElementSibling);
// const newElement = document.createElement('li');
// console.log(newElement);
// const text = document.createTextNode('blog');
// console.log(text);
// newElement.appendChild(text);
// console.log(newElement);
// list1.appendChild(newElement)
// newElement.style.color = 'blue';
// list1.insertBefore(newElement, list1.children[0]);
// list1.removeChild(newElement)
// console.log(list1);



// // but.onclick = () => {
// //     heading1.textContent = 'blue'
// // }
// // but.onmouseover = () => {
// //     heading1.style.color = 'red'
// // }
// // but.onmouseout = () => {
// //     heading1.style.color = 'green'
// // }
// console.log(but);