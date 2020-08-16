class Day {

  constructor(day) {
    this.id = day.id
    this.name = day.attributes.name
    this.date = day.attributes.date
  }

  //render day attributes from most recently created day in the database
  renderDay() {

    const p1 = document.getElementById('left-header')
    p1.innerText = `${this.name}`
    const p2 = document.getElementById('right-header')
    p2.innerText = `${this.date}`
    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('id', this.id)

    deleteBtn.className = 'btn btn-lg btn-outline-secondary'
    deleteBtn.textContent = 'Delete this day'
    const deleteContainer = document.getElementById('delete-container')
    deleteContainer.append(deleteBtn)
    deleteBtn.addEventListener("click", event => {
      deleteDay(event.target.id)
   })


  }

  //render day attributes from newly created day and day found in search
  renderNewDay() {

    const p1 = document.getElementById('left-header')
      p1.innerText = `${this.name}`
    const p2 = document.getElementById('right-header')
      p2.innerText = `${this.date}`

    const addBtn = document.querySelector('#new-day-btn')
    addBtn.style.visibility = "hidden"
    const reloadP = document.querySelector('#reload')
    reloadP.style.visibility = "visible"
    const reloadBtn = document.querySelector('#reload-btn')
    reloadBtn.style.visibility = "visible"

    reloadBtn.addEventListener('click', () => {
      location.reload()
    })

  }
}
