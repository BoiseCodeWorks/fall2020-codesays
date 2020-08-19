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
  let template = ""
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    template += /*html*/`
      <button type="button" class="btn btn-primary" onclick="speak('${animal.name}','${animal.noise}')">${animal.name}...</button>
    `
  }
  template += '<button type="button" class="btn btn-info" onclick="random()">Random</button>'
  document.getElementById("buttons").innerHTML = template
}

function speak(name, noise) {
  let elem = document.getElementById("phrase")
  let animal = animals.find(a => a.name == name)
  elem.style.color = animal.color
  elem.innerHTML = `
  <img src="${animal.img ? animal.img : 'https://i.pinimg.com/originals/eb/bd/06/ebbd06c474eb0a1096c16991a441ad52.jpg'}" />
  <h3>The ${name} says ${noise}</h3>
  `
}


function random() {
  //pick a random animal
  // 0 , animals.length - 1
  let index = Math.floor(Math.random() * (animals.length - 0.01))
  let animal = animals[index]
  // call speak
  speak(animal.name, animal.noise)
}





drawButtons()