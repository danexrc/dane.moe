let development = [];
let graphics = [];
let music = [];

function getJSON() {
    fetch('https://eraze.xyz/json/events.json').then (data => data.json()).then(data => {
         development.push(data.data);
         console.log(events);

        
    })
    .catch(error => {
        console.log(error);
    })
}