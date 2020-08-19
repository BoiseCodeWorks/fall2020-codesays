let animals = [
  {
    name: "Cow",
    noise: "Moo",
    color: "brown",
    img: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"
  },
  {
    name: "Duck",
    noise: "Quack",
    color: "yellow",
    img: "https://www.thespruce.com/thmb/jMtJRClFPZIZ5wwvRKj89lL2LBA=/1500x1000/filters:fill(auto,1)/duck-big-bill-59ef8e5068e1a2001072c89e.jpg"
  },
  {
    name: "Snake",
    noise: "Hiss",
    color: "red",
    img: 'https://petdiys.com/wp-content/uploads/2014/07/DIY-Snake-Top-Hat.jpg'
  },
  {
    name: "Tim",
    noise: "TACOOOOS",
    color: "blue",
    img: ''
  }
]


function drawButtons() {
  // NOTE Template is a holder for all the html generated to be injected all at once
  // caution, when using this all the html must be going to the same place
  let template = ""
  // loop over the data
  for (let i = 0; i < animals.length; i++) {
    // create alias for each element
    const animal = animals[i];

    // NOTE for each of the animals create a button with their specific data and add it to the template
    template += /*html*/`
      <button type="button" class="btn btn-primary" onclick="speak('${animal.name}')">${animal.name}...</button>
    `
  }
  // REVIEW this is an alternative to the for loop above
  // animals.forEach(animal => {
  //   template += /*html*/`
  //   <button type="button" class="btn btn-primary" onclick="speak('${animal.name}','${animal.noise}')">${animal.name}...</button>`
  // })

  // NOTE adding an addition element before injecting
  template += '<button type="button" class="btn btn-info" onclick="random()">Random</button>'

  // inject the HTML into the page
  document.getElementById("buttons").innerHTML = template
}

// NOTE Speak takes in two strings the animal name and its noise
function speak(name) {
  // NOTE Grabbing the element from the document
  let elem = document.getElementById("phrase")
  // NOTE find uses the arrow syntax to locate the first object that returns true
  let animal = animals.find(a => a.name == name)

  // NOTE this works but is ugly
  // let animal = animals.find(function(a){
  //   return a.name == name
  // })


  // NOTE Taking the found element and adding to the style attribute the color
  elem.style.color = animal.color

  // NOTE inject html for animal to page
  elem.innerHTML = `
  <img src="${animal.img ? animal.img : 'https://i.pinimg.com/originals/eb/bd/06/ebbd06c474eb0a1096c16991a441ad52.jpg'}" />
  <h3>The ${animal.name} says ${animal.noise}</h3>
  `
}


function random() {
  // pick a random animal index from the animals array
  let index = Math.floor(Math.random() * (animals.length - 0.01))
  // get the animal from the array
  let animal = animals[index]
  // call speak
  speak(animal.name)
}




// NOTE this is called at the beginning because we need the buttons to render to the page
drawButtons()