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
      for (let i = 0; i < daysEntries.length; i++) {
        renderEntry(daysEntries[i], `${i}`)
      }

      //renderEntries(daysEntries)
      //debugger;
      //daysEntries.forEach(entry =>
        //renderEntry(entry))
      })
}

function createFormHandler(e) {
  e.preventDefault()
  console.log('submitted')
  //debugger;
  const dateInput = document.querySelector('#day-date').value
  const nameInput = document.querySelector('#input-name').value
  const entryInput1 = document.querySelector('#entry-input-1').value
  const categoryInput1 = document.querySelector('#categories-1').value
  const categoryId1 = parseInt(categoryInput1)
  const entryInput2 = document.querySelector('#entry-input-2').value
  const categoryInput2 = document.querySelector('#categories-2').value
  const categoryId2 = parseInt(categoryInput2)
  postFetchDay(dateInput, nameInput, entryInput1, categoryId1, entryInput2, categoryId2)
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
//relBtn.setAttribute('id', `${object.id}-rel`)
function renderEntry(entry, i) {
  console.log(entry)
  let entriesCollection = document.getElementById("entries-container")

  const div = document.createElement('div')
  div.className = 'card'
  div.setAttribute("included-id", i)
  const h2 = document.createElement('h2')
  h2.setAttribute('id', i)
  //debugger;
  h2.innerText = `${entry.attributes.content}`
  const h3 = document.createElement('h3')
  h3.setAttribute('id', i)
  h3.innerText = `${entry.attributes.category.name}`
  //div.append(h2,h3)
  entriesCollection.append(h2, h3)


}

//entries_attributes: [:id, :content, :day_id, :category_id])
function postFetchDay(date, name, entry_content_1, category_id_1, entry_content_2, category_id_2) {
  //console.log(date, name, entry_content, category_id)
  const bodyData = {date, name, entry_content_1, category_id_1, entry_content_2, category_id_2}

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
    console.log(day)
    const dayData = day.data
    renderNewDay(dayData)
    const entryData = day.included
    for (let i = 0; i < entryData.length; i++) {
      renderNewEntry(entryData[i], `${i}`)
    }
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
  //console.log(day)
  const p1 = document.querySelector('p1')
    p1.innerText = `${day.attributes.name}`
  const p2 = document.querySelector('p2')
    p2.innerText = `${day.attributes.date}`

}



function renderNewEntry(entry, i) {
  console.log(i)

  //debugger;
    const h2 = document.getElementById(i)
    h2.innerText = `${entry.attributes.content}`
    const h3 = h2.nextSibling
    h3.innerText = `${entry.attributes.category.name}`

}
