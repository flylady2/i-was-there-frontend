class Day {

  constructor(day) {
    console.log('here')
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

  }

  //render day attributes from newly created day and day found in search
  renderNewDay() {

    const p1 = document.getElementById('left-header')
      p1.innerText = `${this.name}`
    const p2 = document.getElementById('right-header')
      p2.innerText = `${this.date}`
    const addBtn = document.querySelector('#new-day-btn')
      addBtn.style.visibility = "visible"

  }
}
