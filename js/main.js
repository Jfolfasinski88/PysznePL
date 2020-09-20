const idBtn = document.getElementById('id-btn');
let order = {
    pizza: '',
    sosy: [],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: '',
    napoje: []
}
idBtn.addEventListener("click", takeOrder)
function sprawdzaniecheckBox(nazwaKlasy) {
    console.log(nazwaKlasy)
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    if (nazwaKlasy === "sosy") {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.sosy.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    } else {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.napoje.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    }
}
function takeOrder() {
    sprawdzaniecheckBox("sosy")
    sprawdzaniecheckBox("napoje")
    // pobieram imię i nazwisko z input 
    const nameC = document.getElementById('nameC').value
    order.name = nameC
    // pobieram email z input 
    const email = document.getElementById('email').value
    order.email = email
    // pobieram telefon z input 
    const tel = document.getElementById('tel').value
    order.tel = tel
    // pobieram adress
    const adress = document.getElementById('adress')
    order.adress = adress
    // pobieram textarea 
    const msg = document.getElementById('msg').value
    order.text = msg
    console.log("takeOrder -> nameC", order)
}