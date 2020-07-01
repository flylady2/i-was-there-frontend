let addDay = false
const endPoint = "http://localhost:3000/api/v1/days";

//debugger;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-day-btn')
  const searchForm = document.querySelector('.search-form-container')
  searchForm.addEventListener('submit', (e) => {
    //debugger;
    e.preventDefault()
    console.log('search form')
    //console.log('search clicked')
    searchFormHandler(e)
   //debugger;
  })


  const createDayForm = document.querySelector('.form-container')
  createDayForm.style.display = 'none'
  const addDayForm = document.getElementById('create-day-form')
  //const addBtn = document.querySelector('#new-day-btn')
  getDays()
  addBtn.addEventListener('click', () => {
    //console.log('clicked')
    addBtn.style.visibility = "hidden"//debugger;
    addDay = !addDay
    //debugger;
    if (addDay) {
      addDayForm.reset()
      createDayForm.style.display = 'block'
      createDayForm.addEventListener("submit", (e) => {
        console.log('add day')
        e.preventDefault()
        createFormHandler(e)
      })

    } else {
      createDayForm.style.display = 'none'
    }
  })
  //const searchBtn = document.querySelector('#search-button')



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
      daysData.forEach(day => {
        //console.log(day)
        //debugger;
        let lastDay = new Day(day).renderDay()
      })
        //renderDay(day))
      const daysEntries = days.included
      //debugger;
      if (daysEntries.length > 4) {
        const image = daysEntries.pop()
        //debugger;
        for (let i = 0; i < daysEntries.length; i++) {
          let lastDayEntry = new Entry(daysEntries[i], `${i}`).renderEntry()
        }
        //renderImage(daysImage)
        //let lastDaysImage = new Image(image).renderImage()
        let lastDaysImage = new Image(image)//.renderNewImage()
        document.querySelector(`#image-container`).innerHTML = lastDaysImage.renderImage()
        //debugger;
      } else {
        for (let i = 0; i < daysEntries.length; i++) {
          let lastDayEntry = new Entry(daysEntries[i], `${i}`).renderEntry()
        }

      }
    //  .catch(errors => alert(@day.errors.full_messages))

      })

}

function createFormHandler(e) {
  e.preventDefault()
  //console.log('submitted')

  const dateInput = document.querySelector('#day-date').value
  const nameInput = document.querySelector('#input-name').value
  //debugger;
  const entryInput1 = document.getElementById('entry-input-1').value
  //const entryInput1 = document.querySelector('#entry-input-1').value
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


function postFetchDay(date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, input_url, input_caption) {
  //console.log(date, name, entry_content, category_id)
  const bodyData = {date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, input_url, input_caption}
  const createDayForm = document.querySelector('.form-container')
  createDayForm.style.display = 'none'

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
    const newDayData = day.data
    let newDay = new Day(newDayData).renderNewDay()
    const newEntriesData = day.included
    if (newEntriesData.length > 4) {
      const image = newEntriesData.pop()
      for (let i = 0; i < newEntriesData.length; i++) {
        let newDayEntry = new Entry(newEntriesData[i], `${i}`).renderNewEntry()
      }
      let newDaysImage = new Image(image)//.renderNewImage()
      document.querySelector(`#image-container`).innerHTML = newDaysImage.renderNewImage()


    } else {
      for (let i = 0; i < newEntriesData.length; i++) {
        let newDayEntry = new Entry(newEntriesData[i], `${i}`).renderNewEntry()
      }
    }
  }
)
//removeEntryCards()
}

function removeEntryCards() {
  let entryCards = Array.prototype.slice.call(document.getElementsByClassName('entry-card'), 0)
  debugger;
     //while (entryCards.length > 0) {
       //entryCards[0].remove()
     //}


}

function searchFormHandler(e) {
  //e.preventDefault()
  console.log('search clicked')
  const searchInput = document.querySelector('#search-date').value
  //debugger;
  searchDayFetch(searchInput)
  //console.log(searchInput)
}



function searchDayFetch(searchInput) {
  fetch(`http://localhost:3000/api/v1/days?date=${searchInput}`)

  .then(response => response.json())
  .then(day => {
    //debugger;
    const newDayData = day.data[0]
    //debugger;
    let newDay = new Day(newDayData).renderNewDay()
    const newEntriesData = day.included
    if (newEntriesData.length > 4) {
      const image = newEntriesData.pop()
      for (let i = 0; i < newEntriesData.length; i++) {
        let newDayEntry = new Entry(newEntriesData[i], `${i}`).renderFoundEntry()
      }
      let newDaysImage = new Image(image).renderNewImage()

    } else {
      for (let i = 0; i < newEntriesData.length; i++) {
        let newDayEntry = new Entry(newEntriesData[i], `${i}`).renderFoundEntry()
      }

    }

  }
)
const searchForm = document.getElementById('search-day-form')
searchForm.reset()

}




  function editableEntry(event) {
    //console.log('here')
    //debugger;
    let h2 = document.getElementById(event.target.id)
    //let h3 = div.firstChild
    //let h2 = h3.nextSibling
    h2.contentEditable = true
    div = h2.parentElement
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
        console.log(entry)
        renderEditedEntry(entry)
    })
  }


  function renderEditedEntry(entry) {
    let entryData = entry.data
    console.log(entryData)
    let submitBtn = document.querySelector('.submitBtn')
    submitBtn.remove()

    let h2 = document.getElementById(entryData.id)
    h2.innerText = entryData.attributes.content
    h2.contentEditable = false
    //console.log(entry)
  }
