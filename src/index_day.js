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
      //debugger;
      //console.log(days)
      //debugger;
      const daysData = days.data
      daysData.forEach(day =>
        renderDay(day))
      const daysEntries = days.included
      if (daysEntries.length > 4) {
        const daysImage = daysEntries.pop()
        for (let i = 0; i < daysEntries.length; i++) {
          renderEntry(daysEntries[i], `${i}`)
        }
        renderImage(daysImage)

      } else {
        for (let i = 0; i < daysEntries.length; i++) {
          renderEntry(daysEntries[i], `${i}`)
        }

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
  const entryInput3 = document.querySelector('#entry-input-3').value
  const categoryInput3 = document.querySelector('#categories-3').value
  const categoryId3 = parseInt(categoryInput3)
  const entryInput4 = document.querySelector('#entry-input-4').value
  const categoryInput4 = document.querySelector('#categories-4').value
  const categoryId4 = parseInt(categoryInput4)
  const imageInput = document.querySelector('#input-url').value
  const imageCaption = document.querySelector('#input-caption').value
  postFetchDay(dateInput, nameInput, entryInput1, categoryId1, entryInput2, categoryId2, entryInput3, categoryId3, entryInput4, categoryId4, imageInput, imageCaption)
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
  div.setAttribute('id', `${entry.id}`)
  const h3 = document.createElement('h3')
  h3.setAttribute('id', i)

  h3.innerText = `${entry.attributes.category.name}`

  const h2 = document.createElement('h2')
  h2.setAttribute('id', i)


  h2.innerText = `${entry.attributes.content}`

  //debugger;
  //let editBtn = document.createElement('button')
  //editBtn.setAttribute('id', `${entry.id}`)
  //editBtn.className = 'editBtn'
  //editBtn.textContent = 'Edit'
  div.append(h3, h2)
  entriesCollection.appendChild(div)
  //editBtn.addEventListener("click", event => {
  //  event.preventDefault()
  //  console.log('clicked')
  //  editableEntry(event)
    //debugger;
  //})



}

function renderImage(image) {

  let imageContainer = document.getElementById("image-container")
  const div = document.createElement('div')
  div.className = 'card'
  let img = document.createElement('img')

  img.src = `${image.attributes.url}`
  const p3 = document.createElement('p3')
  p3.innerText = `${image.attributes.caption}`
  div.append(img, p3)
  imageContainer.appendChild(div)
  //<img src=${image.attributes.url} height="200" width="250">
  //const p = document.createElement('p')
  //p.innerText = `${image.attributes.caption}`
  //imageContainer.append(img, p)
}

//entries_attributes: [:id, :content, :day_id, :category_id])
function postFetchDay(date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, input_url, input_caption) {
  //console.log(date, name, entry_content, category_id)
  const bodyData = {date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, input_url, input_caption}

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
    //console.log(day)
    const newDayData = day.data
    //console.log(day.data)
    renderNewDay(newDayData)
    const newEntriesData = day.included
    if (newEntriesData.length > 4) {
      const newDaysImage = newEntriesData.pop()
      for (let i = 0; i < newEntriesData.length; i++) {
        renderNewEntry(newEntriesData[i], `${i}`)
      }
      renderNewImage(newDaysImage)

    } else {
      for (let i = 0; i < newEntriesData.length; i++) {
        renderNewEntry(newEntriesData[i], `${i}`)
      }

    }
    //const imageData = entryData.pop()
    //console.log(entryData)
    //console.log(imageData)

    //renderNewImage(imageData)
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
  let entriesCollection = document.getElementById("entries-container")

  const div = document.createElement('div')
  div.className = 'card'
  div.setAttribute('id', `${entry.id}`)//console.log(i)

  //debugger;
  const h3 = document.getElementById(i)
  h3.innerText = `${entry.attributes.category.name}`
  const h2 = h3.nextSibling
  h2.innerText = `${entry.attributes.content}`





  let editBtn = document.createElement('button')
  editBtn.setAttribute('id', `${entry.id}`)
  editBtn.className = 'editBtn'
  editBtn.textContent = 'Edit'
  div.append(h3, h2, editBtn)
  entriesCollection.appendChild(div)
  editBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log('clicked')
    editableEntry(event)
      //debugger;
    })

}

function renderNewImage(image) {

  let img = document.querySelector('img')
  img.src = `${image.attributes.url}`
  const p3 = document.querySelector('p3')
    p3.innerText = `${image.attributes.caption}`
  //<img src=${image.attributes.url} height="200" width="250">
  //const p = document.createElement('p')
  //p.innerText = `${image.attributes.caption}`
  //imageContainer.append(img, p)
}

function editableEntry(event) {
  console.log('here')
  //debugger;
  let div = document.getElementById(event.target.id)
  let h3 = div.firstChild
  let h2 = h3.nextSibling
  h2.contentEditable = true
  //debugger;

  let submitBtn = document.createElement('button')
  submitBtn.setAttribute('id', `${event.target.id}`)
  submitBtn.className = 'submitBtn'
  submitBtn.textContent = 'Submit'
  div.append(submitBtn)
  //debugger;
  submitBtn.addEventListener("click", event_two => {
    event_two.preventDefault()
    console.log('submitted')
    editEntry(event_two.target.id, h2)
    //debugger;
  })
  //editEntry()
    //editEntry(id)
}

function editEntry(id, h2) {
  //debugger;
  //let div = document.getElementById(id)
  //let h2 = div.nextSibling
  //h2.contentEditable = true
  const newContent = h2.innerText
  const editData = {id, newContent}
  fetch(`http://localhost:3000/api/v1/entries/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(editData)
  })
  .then(response => response.json())
    .then(entry => {
      //console.log(entry)
      renderEditedEntry(entry)
  })
}

function renderEditedEntry(entry) {
  let entryData = entry.data
  let div = document.getElementById(entryData.id)
  let h3 = div.firstChild
  let h2 = h3.nextSibling
  h2.innerText = entryData.attributes.content
  //console.log(entry)
}
