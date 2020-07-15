class EditableEntry {

  constructor(id, content) {

    //console.log(event)
    this.id = id
    this.content = content

  }

  makeEditable() {
    let p = document.getElementById(this.id)
    //console.log(this.target_id)
    p.contentEditable = true
    let div = p.parentElement
    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('id', `${this.id}`)
    submitBtn.className = 'btn btn-sm btn-outline-secondary submitBtn'
    submitBtn.textContent = 'Submit'
    div.append(submitBtn)
    submitBtn.addEventListener("click", event_two => {
      event_two.preventDefault()
      console.log('submitted')
      editEntry(event_two.target.id, p)
   })
  }


    renderEditedEntry() {
      let id = this.id
      //console.log(entryData)
      let submitBtn = document.querySelector('.submitBtn')
      submitBtn.remove()

      let p = document.getElementById(this.id)
      p.innerText = this.content
      p.contentEditable = false
      //console.log(entry)
    }


}
