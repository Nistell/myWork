// import 'module.js';
//
// console.log(x.func(3,3));

document.getElementById("button").addEventListener('click', async () => { // Находим элемент по id (id = "button") и ставим событие click
     const res = await fetch("/test", {
         headers: {
             'Content-Type': 'application/json' // тип body который мы отправляем
         },
         method: 'POST', // HTTP метод
         body: JSON.stringify({ // сам боди
             name: document.getElementById('name').value,
             age: document.getElementById('age').value,
             country: document.getElementById('country').value,
         })
     });

     const body = await res.json(); // парсим body который возращается с бэкенда
    console.log(body);
});
