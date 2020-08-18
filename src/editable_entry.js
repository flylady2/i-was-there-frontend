class EditableEntry {

  constructor(id, content) {
    this.id = id
    this.content = content

  }

  //make newly created EditableEntry editable
  makeEditable() {
    const p = document.getElementById(this.id)

    p.contentEditable = true
    const div = p.parentElement
    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('id', `${this.id}`)
    submitBtn.className = 'btn btn-sm btn-outline-secondary submitBtn'
    submitBtn.textContent = 'Submit'
    div.append(submitBtn)
    submitBtn.addEventListener("click", event => {
      editEntry(event.target.id, p)
   })
  }

    //render newly edited entry
    renderEditedEntry() {
      const id = this.id

      const submitBtn = document.querySelector('.submitBtn')
      submitBtn.remove()

      const p = document.getElementById(this.id)
      p.innerText = this.content
      p.contentEditable = false

    }


}
