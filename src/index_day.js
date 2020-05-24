const endPoint = "http://localhost:3000/api/v1/days";
document.addEventListener('DOMContentLoaded', () => {
  getDays()
  const createDayForm = document.querySelector('#create-day-form')
  createDayForm.addEventListener("submit", (e) => createFormHandler(e))
  //let createEntryForm = document.querySelector('#create-entry-form')
  //createEntryForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getDays() {
  fetch(endPoint)
    .then(res => res.json())

    .then(days => {
      console.log(days)

      const daysData = days.data
      daysData.forEach(day =>
      renderDay(day))

      const daysEntries = days.included
      daysEntries.forEach(entry =>
      renderEntry(entry))

      })


}

function createFormHandler(e) {
  e.preventDefault()
  console.log('submitted')
  const dateInput = document.querySelector('#day-date').value
  const nameInput = document.querySelector(`#input-name`).value
  postFetchDay(dateInput, nameInput)
}



function renderDay(day) {
  //debugger;

  let daysCollection = document.getElementById("days-container")
  const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${day.id}`)
  const p1 = document.createElement('p1')
    p1.innerText = `${day.attributes.name}`
  const p2 = document.createElement('p2')
    p2.innerText = `${day.attributes.date}`

    div.append(p1, p2)
    daysCollection.appendChild(div)
}

function renderEntry(entry) {
  console.log(entry)

  let entriesCollection = document.getElementById("entries-container")
  const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${entry.id}`)
    const h2 = document.createElement('h2')
    h2.innerText = `${entry.attributes.content}`
    const h3 = document.createElement('h3')
    h3.innerText = `${entry.attributes.category.name}`
    //console.log(h3.innerText)
  //const p = document.createElement('p')
    //p.innerText = `${entry.attributes.content}`
  //const h2 = document.createElement('h2')
    //h2.innerHTML = `${entry.attributes.category.name}`
  //const h3 = document.createElement('h3')
    //h3.innerHTML = `${entry.attributes.day.date}`
    //let ul = document.createElement('ul')
    div.append(h2,h3)
    entriesCollection.appendChild(div)


}


function postFetchDay(date, name) {
  console.log(date, name)
  const bodyData = {date, name}

  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(day => {
    console.log(day);
    renderDay(day.data)
  })
}
