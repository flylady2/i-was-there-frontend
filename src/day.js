class Day {

  constructor(day) {
    this.id = day.id
    this.name = day.attributes.name
    this.date = day.attributes.date
    this.user_id = day.attributes.user_id
  }

  //render day attributes from most recently created day in the database
  renderDay() {

    document.getElementById('left-header').innerText = `${this.name}`
    document.getElementById('right-header').innerText = `${this.date}`

    const deleteContainer = document.querySelector('#delete-container')
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('id', this.id)
    deleteBtn.className = 'btn btn-lg btn-outline-secondary'
    deleteBtn.textContent = 'Delete this day'
    deleteContainer.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", event => {
      deleteDay(event.target.id)
   })
  }

  //render day attributes from newly created day and day found in search
  renderNewDay() {

    document.getElementById('left-header').innerText = `${this.name}`
    document.getElementById('right-header').innerText = `${this.date}`

    const deleteBtn = document.getElementById('delete-container').firstElementChild
    deleteBtn.removeEventListener("click", event => {
      deleteDay(event.target.id)
    })
    deleteBtn.setAttribute('id', this.id)
    deleteBtn.addEventListener("click", event => {
      deleteDay(event.target.id)
   })

    document.querySelector('#add-day-btn').style.visibility = "hidden"

    document.querySelector('#reload').style.visibility = "visible"

    const reloadBtn = document.querySelector('#reload-btn')
    reloadBtn.style.visibility = "visible"

    reloadBtn.addEventListener('click', () => {
      location.reload()
    })

  }
}
