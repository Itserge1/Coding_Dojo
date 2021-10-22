function hide(element) {
    document.querySelector(".bottom").remove()
}
// function city(element){
//     var city = document.querySelector(".classe").id
//     if ( city = " #Burbank"){
//         alert("hey burnmark")
//     }
// }
function city(element) {
    alert("Loading weather report...")
}
function city1(element) {
    alert("Loading weather report...")
}

function city2(element) {
    alert("Loading weather report...")
}
// (75°C × 9/5) + 32 = 167°F
function converts(element) {
    // var num10 = Math.round( document.querySelectorAll(".red").innerHTML * 9/5) + 32
    // var num11 = Math.round( document.querySelectorAll(".blue").innerHTML * 9/5) + 32
    var docs1 = document.querySelector("#selector").value;
    var temp = document.querySelectorAll(".red, .blue")
    if (docs1 == "fahrenheit") {
        for (i = 0; i < temp.length; i++) {
            var newtemp = Math.round(temp[i].innerHTML * 9 / 5) + 32;
            temp[i].innerHTML = newtemp
        }
        // document.querySelector(".blue").innerHTML = num11
    }
    else if (docs1 == "celsius") {
        for ( i = 0; i< temp.length; i++){
            var newtemp2 = Math.round((temp[i].innerHTML -32) * 5/9 )
            temp[i].innerHTML = newtemp2
        }


    }
}
// function convert(temperature, temp_type){
//     console.log(temperature)
//     if (temp_type == "fahrenheit") {
//     temperature = Math.round(temperature * 9/5) + 32; }
//     else {
//     temperature = Math.round(temperature - 32) * 5/9;
//     }
//     return temperature
// }

// console.log(convert(document.querySelector(".red").innerHTML, "celsius"));

// function convertoutput(element){
//     var temp = document.querySelectorAll(".red, .blue")
//     for ( var i=0; i < temp.length; i++){
//         temp[i].innerHTML = convert(temp[i].innerHTML, element.value)
//     }
// }