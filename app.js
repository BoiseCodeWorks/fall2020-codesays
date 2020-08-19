let animals = [
  {
    name: "Cow",
    noise: "Moo",
    color: "brown"
  },
  {
    name: "Duck",
    noise: "Quack",
    color: "yellow"
  },
  {
    name: "Snake",
    noise: "Hiss",
    color: "red"
  },
  {
    name: "Tim",
    noise: "TACOOOOS",
    color: "blue"
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
  debugger
  document.getElementById("buttons").innerHTML = template
}

function speak(name, noise) {
  let elem = document.getElementById("phrase")
  let animal = animals.find(a => a.name == name)
  elem.style.color = animal.color
  elem.innerText = `The ${name} says ${noise}`
}






drawButtons()