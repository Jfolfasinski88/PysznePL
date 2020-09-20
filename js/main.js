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
    const adress = document.getElementById('adress').value
    order.adress = adress
    // pobieram textarea 
    const msg = document.getElementById('msg').value
    order.text = msg
    // console.log("takeOrder -> nameC", order)

    // pobieranie selecta
    const pizzaSelect = document.getElementById('pizza').value
    console.log("takeOrder -> pizzaSelect", pizzaSelect)
if(pizzaSelect =="0"){
alert("Wpierw wybier Pizze !!! ")
}else{
    order.pizza = pizzaSelect
}
if(order.adress !== '' && order.email !== '' &&
 order.name !== '' &&  order.napoje.length > 0 &&
  order.sosy.length > 0 && order.tel !== '' ) {
console.log(order)
} else {
    alert('uzupełnij zamówienie')
}
order = {
    pizza: '',
    sosy: [],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: '',
    napoje: []
}

}