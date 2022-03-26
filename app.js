const fs = require('fs');
const path = require('path')

// читання файлу спосіб 1:(асинхронний(программа не чекає завершення а йде далі))
fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data);
});

// читання файлу спосіб 2:(синхронний(программа чекає завершення зчитування файлу)
let text = fs.readFileSync('t1.txt', 'utf-8');

console.log('test');
console.log(text);
// читання папки, вертає масів змісту папки
fs.readdir('papka', (err, data) => {
    console.log(data);
// даний масів можливо прочитать
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    data.forEach(file => {
        console.log(file);
// отримать формат файлу
        console.log(path.extname(file));
// отримать дані файлу
        console.log(fs.statSync('papka/' + file));
// отримать конкретні дані файлу
        console.log(fs.statSync('papka/' + file).size);
    })
})

fs.writeFile('papka/newFile.txt', 'test Text2', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('good');
    }
})
