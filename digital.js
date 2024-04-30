const box = document.querySelector('#box');


setInterval(()=>{
     const date = new Date();
const dateTime = date.toLocaleTimeString();
box.innerHTML = `${dateTime}`;
}, 1000)