class Image {

  constructor(image) {
    //debugger;
    this.id = image.id
    this.url = image.attributes.url
    this.caption = image.attributes.caption
    //this.renderImage()

  }


  renderImage() {
    //debugger;
    //let imageContainer = document.getElementById("image-container")
    //const div = document.createElement('div')
    //div.className = 'card'
    //let img = document.createElement('img')

    //img.src = `${this.url}`

    //const p3 = document.createElement('p3')
    //p3.innerText = `${this.caption}`
    //div.append(img, p3)
    //imageContainer.appendChild(div)
    //<img src=${image.attributes.url} height="200" width="250">
    //New code:
    return `
      <div class="container-fluid">
        <img id="img" src=${this.url} class="img-fluid" alt="responsive image">
        <p id="p3">${this.caption}</p>
      </div>
      `

  }

  renderNewImage() {
    //let img = document.querySelector('img')
    let img = document.getElementById('img')
    //debugger;
    img.src = `${this.url}`
    const p3 = document.getElementById('p3')
    p3.innerText = `${this.caption}`


    //<img src=${image.attributes.url} height="200" width="250">
    //const p = document.createElement('p')
    //p.innerText = `${image.attributes.caption}`
    //imageContainer.append(img, p)
  }




}
