console.log(" app .js loaded ....");



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#msg-1');
const message2 = document.querySelector('#msg-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    message1.textContent = "Loading ....";
    message2.textContent = "Loading ....";
    console.log('testing',search.value);
    fetch('http://localhost:3000/weather?address='+search.value)
    .then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                console.log("error = ", data.error);
                message1.textContent = data.error;
            } else {
                message1.textContent = data.location;
                message2.textContent = data.forecast;
                console.log("data = "+data.forecast)
            }
        });
});
})