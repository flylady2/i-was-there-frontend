

let addDay = false
const endPoint = "http://localhost:3000/api/v1/days";



document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form')
  loginForm.addEventListener("submit", (e) => {
    loginFormHandler(e)
  })
  const signupForm = document.querySelector('#signup-form')
  signupForm.addEventListener("submit", (e) => {
    signupFormHandler(e)
  })
  const addBtn = document.querySelector('#add-day-btn')
  const reloadBtn = document.querySelector('#reload-btn')
  reloadBtn.style.visibility = "hidden"
  const reloadP = document.querySelector('#reload')
  reloadP.style.visibility = "hidden"
  const searchForm = document.querySelector('.search-form-container')
  searchForm.addEventListener('submit', (e) => {

    e.preventDefault()
    searchFormHandler(e)

  })

  const addDayForm = document.getElementById('add-day-form')
  addDayForm.style.display = 'none'


  addBtn.addEventListener('click', () => {

    addBtn.style.visibility = "hidden"
    addDay = !addDay

    if (addDay) {
      addDayForm.reset()
      addDayForm.style.display = 'block'

      addDayForm.addEventListener("submit", (e) => {

        e.preventDefault()
        addDayFormHandler(e)
      })

    } else {
      addDayForm.style.display = 'none'
    }
  })
  //getDays()
});

function loginFormHandler(e) {
  e.preventDefault()
  const loginForm = document.querySelector('#login-form')
  const usernameInput = e.target.querySelector('#login-username').value
  const passwordInput = e.target.querySelector('#login-password').value
  loginFetch(usernameInput, passwordInput)
  loginForm.reset()
}

function loginFetch(username, password) {
  const bodyData = { user:
    {
    username: username,
    password: password
    }
  }
  fetch("http:localhost:3000/api/v1/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(json => {
    localStorage.setItem('jwt_token', json.jwt)
    renderUserPage()
  })
}

function renderUserPage() {
  //debugger;
  const token = localStorage.getItem('jwt_token')
  //console.log(token)
  //need to personalize this to specific user unless I can only call days for current_user
  fetch("http://localhost:3000/api/v1/page", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
    alert(`Welcome back ${json.user.data.attributes.username}`)

  })
}

function signupFormHandler(e) {
  e.preventDefault()
  const usernameInput = e.target.querySelector('#signup-username').value
  const passwordInput = e.target.querySelector('#signup-password').value
  signupFetch(usernameInput, passwordInput)
  const signupForm = document.querySelector('#signup-form')
  signupForm.reset()
}

function signupFetch(username, password) {
  const bodyData = { user:
    {
    username: username,
    password: password
    }
  }
  fetch("http:localhost:3000/api/v1/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(json => {
    localStorage.setItem('jwt_token', json.jwt)
    console.log(json)
    const token = localStorage.getItem('jwt_token')
    loginFetch(username, password)
  })
}

//get request to the database
function getDays() {
  fetch(endPoint)
    .then(res => res.json())
    .then(day => {

      const daysData = day.data
      let lastDay = new Day(daysData).renderDay()

      const daysEntries = day.included

      const image = daysEntries.pop()

      let lastDaysImage = new Image(image).renderImage()
      const arrayLength = daysEntries.length
      for (let i = 0; i < arrayLength; i++) {
            let lastDayEntry = new Entry(daysEntries[i], `${i}`).renderEntry()
          }
      })
}

function deleteDay(id) {
  const deleteData = {id}
  fetch(`http://localhost:3000/api/v1/days/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(deleteData)
  })
  location.reload()

}

//handle input from form for creating a new day
function addDayFormHandler(e) {

  e.preventDefault()

  const dateInput = document.querySelector('#day-date').value
  const nameInput = document.querySelector('#input-name').value
  const entryInput1 = document.getElementById('entry-input-1').value
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
  const entryInput5 = document.querySelector('#entry-input-5').value
  const categoryInput5 = document.querySelector('#categories-5').value
  const categoryId5 = parseInt(categoryInput5)
  const entryInput6 = document.querySelector('#entry-input-6').value
  const categoryInput6 = document.querySelector('#categories-6').value
  const categoryId6 = parseInt(categoryInput6)
  const imageInput = document.querySelector('#input-url').value
  const imageCaption = document.querySelector('#input-caption').value

  postFetchDay(dateInput, nameInput, entryInput1, categoryId1, entryInput2, categoryId2, entryInput3, categoryId3, entryInput4, categoryId4, entryInput5, categoryId5, entryInput6, categoryId6, imageInput, imageCaption)
}

//post request to database with new day input
function postFetchDay(date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, entry_content_5, category_id_5, entry_content_6, category_id_6, input_url, input_caption) {

  const bodyData = {date, name, entry_content_1, category_id_1, entry_content_2, category_id_2, entry_content_3, category_id_3, entry_content_4, category_id_4, entry_content_5, category_id_5, entry_content_6, category_id_6, input_url, input_caption}


  const addDayForm = document.getElementById('add-day-form')
  addDayForm.style.display = 'none'

  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  //console.log(response)
  .then(day => {
    if (day.errors) {
      alert(day.errors)

      document.querySelector('#reload').style.visibility = "visible"

      const reloadBtn = document.querySelector('#reload-btn')
      reloadBtn.style.visibility = "visible"

      reloadBtn.addEventListener('click', () => {
        location.reload()
      })
    } else {



    const newDayData = day.data
    let newDay = new Day(newDayData).renderNewDay()
    const newEntriesData = day.included

    const image = newEntriesData.pop()
    let newDaysImage = new Image(image).renderNewImage()
    const arrayLength = newEntriesData.length
    for (let i = 0; i < arrayLength; i++) {
      let newDayEntry = new Entry(newEntriesData[i], `${i}`).renderNewEntry()
    }
  }
    })

}


//handle input from form to search for a day by date
function searchFormHandler(e) {

  const searchInput = document.querySelector('#search-date').value
  searchDayFetch(searchInput)

}


//fetch request to retrieve day by date
function searchDayFetch(searchInput) {
  fetch(`http://localhost:3000/api/v1/days?date=${searchInput}`)

  .then(response => response.json())
  .then(day => {

    if (day.data.length === 0) {
      alert("That date does not exist.")
    } else {

      const foundDayData = day.data[0]

      let foundDay = new Day(foundDayData).renderNewDay()
      const foundEntriesData = day.included

      const image = foundEntriesData.pop()
      let foundDaysImage = new Image(image).renderNewImage()

      const arrayLength = foundEntriesData.length
      for (let i = 0; i < arrayLength; i++) {
        let newDayEntry = new Entry(foundEntriesData[i], `${i}`).renderFoundEntry()
      }
    }


  })
//resetting search form
  const searchForm = document.getElementById('search-day-form')
  searchForm.reset()

}


  //patch request to update content of an entry
  function editEntry(id, p) {

    const newContent = p.innerText
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
        //call to create editableEntry and render updated version
        let updatedEntry = new EditableEntry(entry.data.id, entry.data.attributes.content).renderEditedEntry()

    })
  }
