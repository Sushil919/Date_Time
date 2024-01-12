

const clock = document.getElementById('clock');
const TodDate = document.getElementById('date');



setInterval(function() {
    let date = new Date();

clock.innerHTML = date.toLocaleTimeString();
TodDate.innerHTML = date.toLocaleDateString();
}, 1000);