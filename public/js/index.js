import myJson from './results.json' assert { type: 'json' };


// console.log(myJson);
document.getElementById('main').innerHTML = JSON.stringify(myJson);

