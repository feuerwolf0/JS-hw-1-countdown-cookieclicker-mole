const clickerCounter = document.getElementById('clicker__counter')
const clickerSpeed = document.getElementById('clicker__speed')
const cookieImage = document.getElementById('cookie')
let dateStart = new Date().getTime()

cookieImage.onclick = () => {
    // получаю разницу в милисекундах
    dt = new Date().getTime() - dateStart
    // обновляю время последнего клика
    dateStart = new Date().getTime()
    // увеличиваю ширину изображения
    cookieImage.width = 210
    // увеличиваю счетчик кликов
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1
    // изменяю скорость клика
    clickerSpeed.textContent = (1/(dt*0.001)).toFixed(2)
    setTimeout(() => {
        cookieImage.width = 200
    }, 50)
}