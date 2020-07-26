class EditableEntry {

  constructor(id, content) {
    this.id = id
    this.content = content

  }

  //make newly created EditableEntry editable
  makeEditable() {
    let p = document.getElementById(this.id)

    p.contentEditable = true
    let div = p.parentElement
    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('id', `${this.id}`)
    submitBtn.className = 'btn btn-sm btn-outline-secondary submitBtn'
    submitBtn.textContent = 'Submit'
    div.append(submitBtn)
    submitBtn.addEventListener("click", event => {
      event.preventDefault()
      console.log('submitted')
      editEntry(event.target.id, p)
   })
  }

    //render newly edited entry
    renderEditedEntry() {
      let id = this.id

      let submitBtn = document.querySelector('.submitBtn')
      submitBtn.remove()

      let p = document.getElementById(this.id)
      p.innerText = this.content
      p.contentEditable = false

    }


}
