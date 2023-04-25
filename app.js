let cityInput = document.getElementById("city");
let cityBtn = document.getElementById("btncity");
let formOrder = document.getElementById('formorder')

let cityLines = {
    "Chennai" : 15,
    "Coimbatore" : 12,
    "Madurai" : 12,
    "Salem" : 8,
    "Tiruchirappalli" : 6,
    "Thoothukudi" : 2
};
cityBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let city = cityInput.value
    console.log(city)
    document.getElementById('formorder').innerHTML = ""
    generateForm(city)
})

function generateForm(){
    for(let i = 1; i <= cityLines[cityInput.value]; i++){
        let order = document.createElement("input")
        order.placeholder = "Enter here"
        formOrder.appendChild(order)
        formOrder.appendChild(document.createElement("br"))
    }
    cityInput.value = ""
}