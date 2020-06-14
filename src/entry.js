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

    const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute('id', this.id)
    const h3 = document.createElement('h3')
    h3.setAttribute('id', this.i)

    h3.innerText = `${this.category_name}`

    const h2 = document.createElement('h2')
    h2.setAttribute('id', this.i)


    h2.innerText = `${this.content}`

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

  renderNewEntry() {
    let entriesCollection = document.getElementById("entries-container")

    const div = document.createElement('div')
    div.className = 'card'
    div.setAttribute('id', this.id)//console.log(i)
    //debugger;
    const h3 = document.getElementById(this.i)
    h3.innerText = `${this.category_name}`
    const h2 = h3.nextSibling
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

    //editEntry()
      //editEntry(id)
  

  renderEditedEntry() {
    //let entryData = this.data
    let div = document.getElementById(this.id)
    let h3 = div.firstChild
    let h2 = h3.nextSibling
    h2.innerText = this.content
    //console.log(entry)
  }


}
