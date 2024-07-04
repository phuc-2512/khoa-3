var student = [
    {
        name: 'NVA',
        age: 16,
        course: ['mindx01', 'mindx02', 'mind03']
    },
    {
        name: 'NVB',
        age: 18,
        course: ['mindx01', 'mindx02', 'mindx04']
    },
    {
        name: 'NVC',
        age: 17,
        course: ['mindx01', 'mindx03', 'mindx04']
    },
    {
        name: 'NVD',
        age: 15,
        course: ['mindx01', 'mindx02', 'mindx04']
    }
]

console.log(student);

// let age = prompt('Đọo tuổi cần tìm?')

// for (let i = 0; i<student.length; i++) {
//     if (age == student[i].age) {
//         alert(student[i].name)
//     }
//     else {
//         alert('Khong tim thay')
//     }
// }

// let course = prompt('Khoá học cần tìm')

// student.forEach(s => {
//     if (s.course.includes(course)) {
//         alert(s.name);
//     }
//     else {
//         alert('Chưa có lớp này!')
//     }
// })



// Bài 2
let arr1 = [0, 2, 4, 6, 8]
let arr2 = [1, 3, 5, 7]

for (let num of arr1) {
    if (num > 3) {
        console.log((num))
    }
}

for (let num of arr2) {
    if(num > 3) {
        console.log(num);
    }
}

let A = arr1+','+arr2;
console.log(A);

let B = [...arr1, ...arr2].sort((a, b) => a - b);
console.log(B);

let C = arr1+arr2.sort(C)
console.log(C);