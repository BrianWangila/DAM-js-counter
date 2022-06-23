const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()


})

const button10 = document.getElementById("plusTen")
const button15 = document.getElementById("plusFifteen")
const button20 = document.getElementById("plusTwenty")

function addingButtons () {
  button10.addEventListener("click", () => {
    indicator.textContent = (parseInt(indicator.textContent) + 10)
  })

  button15.addEventListener("click", () => {
    indicator.textContent = (parseInt(indicator.textContent) + 15)
  })

  button20.addEventListener("click", () => {
    indicator.textContent = (parseInt(indicator.textContent) + 20)
  })

}
addingButtons()