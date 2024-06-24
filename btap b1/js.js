let student = [
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

let a = prompt('Độ tuổi cần tìm?')

for (let i = 0; i < student.length; i++) {
    if (a == student[i++][i + 1]) {
        alert(a)
    }
    else {
        alert('Không tìm thấy!')
    }
}