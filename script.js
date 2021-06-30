const input = document.getElementById('date')
const button = document.getElementById('submitDate')

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')

function countdown(){
    const theDay = input.value
    const upcDate = new Date(theDay)
    const currDate = new Date()

    const totSec = (upcDate - currDate) / 1000

    const days = Math.floor(totSec / 3600 /24)
    const hours = Math.floor(totSec / 3600) % 24
    const mins = Math.floor(totSec / 60) % 60
    const secs = Math.floor(totSec) % 60

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secsEl.innerHTML = formatTime(secs)

}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

button.addEventListener('click', () => {
    setInterval(countdown, 1000)
})