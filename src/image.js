class Image {

  constructor(image) {
    //debugger;
    this.id = image.id
    this.url = image.attributes.url
    this.caption = image.attributes.caption
    //this.renderImage()

  }


  renderImage() {
    //newest code
    let imageContainer = document.getElementById("image-container")
    const div = document.createElement('div')
    div.className = 'container-fluid'
    imageContainer.append(div)
    let img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.className = 'img-fluid'
    img.src = `${this.url}`
//
    const p1 = document.createElement('p1')
    p1.setAttribute('id', 'p1')

    p1.innerText = `${this.caption}`
    div.append(img, p1)
//    imageContainer.append(div, p1)
    //old code
      //const div = document.createElement('div')
        //const p3 = document.createElement('p3')
    //div.append(img, p3)
    //imageContainer.appendChild(div)
    //<img src=${image.attributes.url} height="200" width="250">
    //New code:
//    return `
//      <div class="container-fluid">
//        <img id="img" src=${this.url} class="img-fluid" alt="responsive image">
//        <p id="p3">${this.caption}</p>
//      </div>
//      `

  }

  renderNewImage() {
    //let img = document.querySelector('img')
    let img = document.getElementById('img')
    //debugger;
    img.src = `${this.url}`
    const p1 = document.getElementById('p1')
    p1.innerText = `${this.caption}`


    //<img src=${image.attributes.url} height="200" width="250">
    //const p = document.createElement('p')
    //p.innerText = `${image.attributes.caption}`
    //imageContainer.append(img, p)
  }




}
