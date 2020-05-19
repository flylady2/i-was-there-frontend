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
  console.log(day)

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

  let entriesCollection = document.getElementById("entries-collection")
  const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${entry.id}`)
  const p = document.createElement('p')
    p.innerText = `${entry.attributes.content}`
  const h2 = document.createElement('h2')
    h2.innerHTML = `${entry.attributes.category.name}`
  const h3 = document.createElement('h3')
    h3.innerHTML = `${entry.attributes.day.date}`
    let ul = document.createElement('ul')
    div.append(p, h2, h3)
    entriesCollection.appendChild(div)


}
