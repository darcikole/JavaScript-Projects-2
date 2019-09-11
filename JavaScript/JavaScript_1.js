function submit_wine() {
    var w_output;
    var w_input = document.getElementById("wine_choice").value;
    var w_string = " is an excellent choice!";
    switch(w_input) {
        case "Chardonnay":
        w_output = "Chardonnay" + w_string;
        break;

        case "Sauvignon Blanc":
        w_output = "auvignon Blanc" + w_string;
        break;

        case "Pinot Gris":
        w_output = "Pinot Gris" + w_string;
        break;

        case "Riesling":
        w_output = "Riesling" + w_string;
        break;

        case "Moscato":
        w_output = "Moscato" + w_string;
        break;

        case "Cabernet Sauvignon":
        w_output = "Cabernet Sauvignon" + w_string;
        break;

        case "Pinot Noir":
        w_output = "Pinot Noir" + w_string;
        break;

        case "Merlot":
        w_output = "Merlot" + w_string;
        break;

        case "Syrah":
        w_output = "Syrah" + w_string;
        break;

        case "Zinfandel":
        w_output = "Zinfandel" + w_string;
    default:
        w_output = "Please enter a wine name exactly as written above.";
    }   
document.getElementById("wine_output").innerHTML = w_output;
}

function class_change() {
    var C = document.getElementsByClassName("change");
    C[2].innerHTML = "This text has changed!";
}

// ---- Canvases ------
window.onload = function() {
var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("wine_glasses");
ctx.drawImage(img,10, 10);
};

var canvas = document.getElementById("secondCanvas");
var cont = canvas.getContext("2d");
// create gradient
var gradient = cont.createLinearGradient(0,0,500,0);
gradient.addColorStop(0, "magenta");
gradient.addColorStop(.7, "white");
gradient.addColorStop(1, "blue");
// Fill gradient
cont.fillStyle = gradient;
cont.fillRect(0,0,500, 250);
