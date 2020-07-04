class Entry {
  constructor(entry, i) {
    //debugger;
    this.id = entry.id
    this.category_name = entry.attributes.category.name
    this.content = entry.attributes.content
    this.i = i
    //this.renderEntry()
  }

  renderEntry() {
    //console.log(entry)
    let entriesCollection = document.getElementById("entries-container")
    //return `
    //  <div id="${this.i}" class="col-md-4">
    //    <h3 class="category=name">${this.category_name}</h3>
    //    <h2 class="entry-content">${this.content}</h2>
    //  </div>
    //  `

    const divRow = document.getElementById('entry-row1')
    const divCol = document.createElement('div')
    divCol.className = 'col-md-4'
    divCol.setAttribute('id', this.i)
    const h3 = document.createElement('h3')
    h3.setAttribute('id', this.i)

    h3.innerText = `${this.category_name}`

    const h2 = document.createElement('h2')
    h2.setAttribute('id', this.i)

    h2.innerText = `${this.content}`

    divCol.append(h3, h2)
    divRow.append(divCol)
    entriesCollection.appendChild(divRow)

  }

  renderNewEntry() {

    let entriesCollection = document.getElementById("entries-container")

    //const div = document.getElementById(this.i)
    //div.className = 'card'
    //div.setAttribute('id', this.id)//console.log(i)
    //debugger;
    const h3 = document.getElementById(this.i)
    //const h3 = div.firstChild
    h3.innerText = `${this.category_name}`
    const h2 = h3.nextSibling
    h2.setAttribute('id', this.id)
    h2.innerText = `${this.content}`

    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', this.id)
    editBtn.className = 'editBtn'
    editBtn.textContent = 'Edit'
    div.append(h3, h2, editBtn)
    entriesCollection.appendChild(div)
    editBtn.addEventListener("click", event => {
      event.preventDefault()
      //debugger;
      console.log('clicked')
      //debugger;
      editableEntry(event)
        //debugger;
      })
  }

  renderFoundEntry() {

    let entriesCollection = document.getElementById("entries-container")
    //entriesCollection.innerHTML = ""
    const div = document.getElementById(this.i)
    //div.className = 'card'
    //div.setAttribute('id', this.id)//console.log(i)
    //debugger;
    const h3 = div.firstChild
    h3.innerText = `${this.category_name}`
    const h2 = h3.nextSibling
    h2.innerText = `${this.content}`
    let editBtn = h2.nextSibling
    if (editBtn) {
      editBtn.remove()
    }
    div.append(h3, h2)
    entriesCollection.appendChild(div)

  }
}
