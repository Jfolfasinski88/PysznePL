// const mainBtn = document.getElementsByClassName('btn');
// console.log("mainBtn button po klasie",mainBtn)
// const input = document.getElementsByClassName('margin-bottom')
// console.log("input po klasie", input)
const idBtn = document.getElementById('id-btn')
console.log("button po id",idBtn)

idBtn.addEventListener("click",takeOrder)

function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy')
    console.log (pomidorowy.checked)
    const czosnkowy = document.getElementById('czosnkowy')
    console.log (czosnkowy.checked)
    const ostry = document.getElementById('ostry')
    console.log (ostry.checked)

}
