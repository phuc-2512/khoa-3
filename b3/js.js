// const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '7b56229af1msh8cf4f32449cde5ap145397jsn28c7636b10d2',
//         'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
//     }
// };

// async function Api() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         var data = JSON.parse(result);
//         console.log(data[0].deaths);
//         console.log(data[0].country);
//         // check kiểu dữ liệu
//         // console.log(typeof(result));
//     } catch (error) {
//         console.error(error);
//     }
// }
// Api()

// obj
// var info = {
//     Name: 'abc',
//     aga: 18,
//     class: '12A'
// }

// var copyinfo = Object.assign({},info)
// console.log(copyinfo);

// var copyinfo2 = Object.assign({},info, {school: 'THCS DA'})
// console.log(copyinfo2);

// let o1 ={a:1, b:2, c:3}
// let o2 ={b:3, c:4}
// let o3 ={c:5}

// var copy = Object.assign({}, o1)

// spread syntax
// var mid = [3, 4];
// var arr = [1, 2, ...mid, 5, 6];

// console.log(arr);

// Math
// var arr = [2, 4, 6, 8, 0];
// var max = Math.max(...arr) 
// console.log(max);

// var min = Math.min(...arr);
// console.log(min);

// string to array
// var str = 'hello';
// var arr = [...str]
// console.log(arr);

// arrow funtion 
// function a() {
//     console.log('h');
// }
// a()

// b = () => {
//     console.log('h');
// }
// b()

// map()
const a = [1, 4, 3, 8]

var dtich = lengthArr (canh => canh*canh)
console.log(dtich);