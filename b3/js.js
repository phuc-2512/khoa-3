const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7b56229af1msh8cf4f32449cde5ap145397jsn28c7636b10d2',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
};

async function Api() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        var data = JSON.parse(result);
        console.log(data[0].deaths);
        console.log(data[0].country);
        // check kiểu dữ liệu
        // console.log(typeof(result));
    } catch (error) {
        console.error(error);
    }
}
Api()