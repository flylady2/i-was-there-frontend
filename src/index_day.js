const endPoint = "http://localhost:3000/api/v1/days";
document.addEventListener('DOMContentLoaded', () => {
  getDays()
  //let createEntryForm = document.querySelector('#create-entry-form')
  //createEntryForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getDays() {
  fetch(endPoint)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(days => {
      //console.log(days)
      days.data.forEach(day =>

      renderDay(day))
      })

}

function renderDay(day) {
  //console.log(day)

  let daysCollection = document.getElementById("days-container")
  const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${day.id}`)
  const p1 = document.createElement('p1')
    p1.innerText = `${day.attributes.name}`
  const p2 = document.createElement('p2')
    p2.innerText = `${day.attributes.date}`
    day.attributes.entries.forEach(entry =>
      renderEntry(entry))
    div.append(p1, p2)
    daysCollection.appendChild(div)
}

function renderEntry(entry) {
  //console.log(entry)

  let entriesCollection = document.getElementById("entries-container")
  const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${entry.id}`)
    const h3 = document.createElement('h3')
    h3.innerText = `${entry.content}`
    //console.log(h3.innerText)
  //const p = document.createElement('p')
    //p.innerText = `${entry.attributes.content}`
  //const h2 = document.createElement('h2')
    //h2.innerHTML = `${entry.attributes.category.name}`
  //const h3 = document.createElement('h3')
    //h3.innerHTML = `${entry.attributes.day.date}`
    //let ul = document.createElement('ul')
    div.append(h3)
    entriesCollection.appendChild(div)


}
function createFormHandler(e) {
  e.preventDefault()
  const dateInput = document.querySelector('#entry-date').value
  const nameInput = document.querySelector(`#input-name`).value
  //const imageInput = document.querySelector('#input-path').value
  //const categoryInput = document.querySelector('#categories').value
  //const categoryId = parseInt(categoryInput)
  //debugger
  createDay(dateInput, nameInput)
}

function createDay(date, name) {
  console.log(date, name)
  let bodyData = {date, name}

  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json:"
    },
    body:JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(day => {
    console.log(day);
    renderDay(day)
  })
}
