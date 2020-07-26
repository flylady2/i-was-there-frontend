

class Entry {
  constructor(entry, i) {
    console.log(entry)
    this.id = entry.id
    this.category_name = entry.attributes.category.name
    this.content = entry.attributes.content
    this.i = i
  }


  //render entry from most recently created day in database
  renderEntry() {

    let entriesCollection = document.getElementById("entries-container")

    const divRow = document.getElementById('entry-row1')
    const divCol = document.createElement('div')
    divCol.className = 'col-md-4'
    divCol.setAttribute('id', this.i)
    const divCard = document.createElement('card')
    divCard.className = 'card border-primary mb-3'
    const divBody = document.createElement('card-body')
    divBody.className = 'card-body'

    const h5 = document.createElement('h5')

    h5.innerText = `${this.category_name}`

    const p = document.createElement('p')
    p.className = 'card-text'
    p.innerText = `${this.content}`

    divBody.append(h5, p)
    divCard.append(divBody)
    divCol.append(divCard)
    divRow.append(divCol)
    entriesCollection.appendChild(divRow)

  }

  //render entry from newly created day
  renderNewEntry() {

    const divCol = document.getElementById(this.i)
    const cardBody = divCol.firstChild.firstChild

    const h5 = divCol.firstChild.firstChild.firstChild
    h5.innerText = `${this.category_name}`
    const p = h5.nextSibling
    p.setAttribute('id', this.id)
    p.innerText = `${this.content}`

    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', this.id)

    editBtn.className = 'btn btn-sm btn-outline-secondary'
    editBtn.textContent = 'Edit'
    cardBody.append(editBtn)

    editBtn.addEventListener("click", event => {
      event.preventDefault()

      console.log('clicked on edit')

      let newEditableEntry = new EditableEntry(event.target.id, p.innerText).makeEditable()

      })
  }

  //render entry from day found by search
  renderFoundEntry() {

    const divCol = document.getElementById(this.i)

    const h5 = divCol.firstChild.firstChild.firstChild
    h5.innerText = `${this.category_name}`
    const p = h5.nextSibling
    p.setAttribute('id', this.id)
    p.innerText = `${this.content}`

    let editBtn = p.nextSibling
    if (editBtn) {
      editBtn.remove()
    }
  }
}
