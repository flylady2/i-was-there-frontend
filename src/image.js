class Image {

  constructor(image) {

    this.id = image.id
    this.url = image.attributes.url
    this.caption = image.attributes.caption

  }

  //render image from most recently created day in database
  renderImage() {

    const imageContainer = document.getElementById("image-container")
    const div = document.createElement('div')
    div.className = 'container-fluid'
    imageContainer.append(div)
    const img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.className = 'img-fluid'
    img.src = `${this.url}`

    const p1 = document.createElement('p1')
    p1.setAttribute('id', 'p1')

    p1.innerText = `${this.caption}`
    div.append(img, p1)

  }


  //render image from newly created day and day found in search
  renderNewImage() {

    document.getElementById('img').src = `${this.url}`
    document.getElementById('p1').innerText = `${this.caption}`

  }
}
