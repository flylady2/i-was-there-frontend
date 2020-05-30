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
      //console.log(days)
      const daysData = days.data
      daysData.forEach(day =>
        renderDay(day))
      const daysEntries = days.included
      //debugger;
      daysEntries.forEach(entry =>
        renderEntry(entry))
      })
}

function createFormHandler(e) {
  e.preventDefault()
  console.log('submitted')
  //debugger;
  const dateInput = document.querySelector('#day-date').value
  const nameInput = document.querySelector('#input-name').value
  const entryInput = document.querySelector('#entry-input').value
  const categoryInput = document.querySelector('#categories').value
  const categoryId = parseInt(categoryInput)
  postFetchDay(dateInput, nameInput, entryInput, categoryId)
}



function renderDay(day) {
  let daysCollection = document.getElementById("days-container")
  //debugger;
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
  //debugger;
  let entriesCollection = document.getElementById("entries-container")
  const div = document.createElement('div')

    div.className = 'card'
    div.setAttribute("included-id", `${entry.id}`)
    //debugger;
    const h2 = document.createElement('h2')
    h2.innerText = `${entry.attributes.content}`
    const h3 = document.createElement('h3')
    h3.innerText = `${entry.attributes.category.name}`
    //debugger;
    div.append(h2,h3)
    //debugger;
    entriesCollection.appendChild(div)

}

//entries_attributes: [:id, :content, :day_id, :category_id])
function postFetchDay(date, name, entry_content, category_id) {
  //console.log(date, name, entry_content, category_id)
  const bodyData = {date, name, entry_content, category_id}

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
    const dayData = day.data
    renderNewDay(dayData)
    const entryData = day.included
    renderNewEntry(entryData)
  }
)}

    //const dayData = day.data
    //console.log(dayData)
    //renderNewDay(dayData)
    //const entriesData = day.included
    //console.log(entriesData)
    //entriesData.forEach(entry =>
      //renderNewEntry(entry))



function renderNewDay(day) {
  console.log(day)
  const p1 = document.querySelector('p1')
    p1.innerText = `${day.attributes.name}`
  const p2 = document.querySelector('p2')
    p2.innerText = `${day.attributes.date}`

}



function renderNewEntry(entry) {
  console.log(entry)
  //debugger;
    const h2 = document.querySelector('h2')
    h2.innerText = `${entry[0].attributes.content}`
    const h3 = document.querySelector('h3')
    h3.innerText = `${entry[0].attributes.category.name}`

}
