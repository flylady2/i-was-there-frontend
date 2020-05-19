const endPoint = "http://localhost:3000/api/v1/entries";
document.addEventListener('DOMContentLoaded', () => {
  getEntries()
  let createEntryForm = document.querySelector('#create-entry-form')
  createEntryForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getEntries() {
  fetch(endPoint)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(entries => {
      entries.data.forEach(entry =>

      renderEntry(entry))
      })

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

function createFormHandler(e) {
  e.preventDefault()
  const contentInput = document.querySelector('#input-content').value
  //const imageInput = document.querySelector('#input-path').value
  const categoryInput = document.querySelector('#categories').value
  const categoryId = parseInt(categoryInput)
  //debugger
  createEntry(contentInput, categoryId)
}


function createEntry(contentInput, category_id) {
  //let bodyData = {contentInput, category_id};
  //debugger
  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify("contentInput", "category_id")
  })
  .then(response => response.json())
  .then(entry => {
    renderEntry(entry)
  })
}
