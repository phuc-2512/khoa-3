// var student = {
//     fullName: 'Phan Van Phuc',
//     age: 22,
//     language: ['VietNamese', 'English'],
// }

// for  (let i = 0; i<student.language.length; i++) {
//     console.log(student.language[i]);
// }

var Username = prompt("Nhap ten: ")
var Password = prompt('Nhap mk: ')

localStorage.setItem('Ten dang nhap', Username)
localStorage.setItem('Mau khau', Password)

var login = document.getElementById('button')
login.addEventListener('click', print)

function print(){
    let a = localStorage.getItem('Ten dang nhap')
    let b = localStorage.getItem('Mau khau')
    let e = a+b
    let c = document.getElementById('d')
    d.innerHTML = e
}
