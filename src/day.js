class Day {

  constructor(day) {
    console.log('here')
    this.id = day.id
    this.name = day.attributes.name
    this.date = day.attributes.date

    //debugger;

  }
  //this.renderDay()



  renderDay() {
    let daysCollection = document.getElementById("days-container")
  //debugger;
    const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute("data-id", `${this.id}`)
    const p1 = document.createElement('p1')
    p1.innerText = `${this.name}`
    const p2 = document.createElement('p2')
    p2.innerText = `${this.date}`
    div.append(p1, p2)
    daysCollection.appendChild(div)
  }


  renderNewDay() {
    //console.log(day)
    const p1 = document.querySelector('p1')
      p1.innerText = `${this.name}`
    const p2 = document.querySelector('p2')
      p2.innerText = `${this.date}`

  }

}
