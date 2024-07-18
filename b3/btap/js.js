// b3
const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arrSquare = arrX.map(x => x ** 2);
const arrOdds = arrX.filter(x => x % 2 !== 0);

console.log(arrSquare);
console.log(arrOdds);

let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game", "sleep", "learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game", "sick", "study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game", "sick", "learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game", "sleep", "learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game", "sick", "study"]
    }
]

// Câu 4


// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// var age = prompt('Tuổi: ');

// for (let i = 0; i<student.length; i++){
//     if (age == student[i].age)
//         alert(student[i].name)
//     else{
//         alert('không có')
//     }
// }

// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// var hobbies = prompt('Sở thích')

// for (let i = 0; i<student.length; i++){
//     if(hobbies == student[i].hobbies){
//         alert(student[i].name.hobbies)
//     }
// }

// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.


// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map.
// const updatedStudents = student.map(student => {
//     if (student.age === 11) {
//         return { ...student, age: 15 };
//     }
//     return student;
// });

// console.log(updatedStudents);
