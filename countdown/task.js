const timer = document.getElementById('timer')
const time = timer.textContent.split(':')
let tHours = parseInt(time[0])
let tMinutes = parseInt(time[1])
let tSeconds = parseInt(time[2])
const downloadElement = document.getElementById('download-present')


const intervalId = setInterval(()=> {
    if (tSeconds > 0) {
        tSeconds -= 1
    } else {
        if (tMinutes > 0) {
            tMinutes -= 1;
            tSeconds = 59;
        } else if (tHours > 0) {
            tHours -= 1;
            tMinutes = 59;
            tSeconds = 59;
        } else {
            alert('Вы победили в конкурсе!');
            clearInterval(intervalId);
            downloadElement.click()
        }
        
    }
    timer.textContent = `${tHours.toString().padStart(2, '0')}:` +
                        `${tMinutes.toString().padStart(2, '0')}:` +
                        `${tSeconds.toString().padStart(2, '0')}`
},1000)