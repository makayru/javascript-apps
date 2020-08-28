function tijd() {
    var prijs = document.getElementById("prijs").value;
    var uur = document.getElementById("uur").value;
    var uurpw = document.getElementById("uurpw").value
    prijs = parseInt(prijs);
    uur = parseInt(uur);
    var uitkomst = prijs / uur;
    var week = uur * uurpw;
    var weken = prijs / week;
    document.getElementById("uurpww").innerHTML = "jij werkt " + uurpw + " uur per week";
    document.getElementById("uitk").innerHTML = "jij moet nog " + uitkomst + " uur werken om je doel te bereiken.";
    document.getElementById("aanw").innerHTML = "jij moet nog " + weken + " weken werken om je doel te bereiken.";
    if (weken == 4) {
        document.getElementById("aanw").innerHTML = "jij moet nog 1 maand weken werken om je doel te bereiken.";
    } else if (weken == 8) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 2 maanden werken om je doel te bereiken.";
    } else if (weken == 12) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 3 maanden werken om je doel te bereiken.";
    } else if (weken == 16) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 4 maanden werken om je doel te bereiken.";
    } else if (weken == 20) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 5 maanden werken om je doel te bereiken.";
    } else if (weken == 24) {
        document.getElementById("aanw").innerHTML = "jij moet nog een half jaar werken om je doel te bereiken.";
    } else if (weken == 26) {
        document.getElementById("aanw").innerHTML = "jij moet nog een half jaar werken om je doel te bereiken.";
    } else if (weken == 28) {
        document.getElementById("aanw").innerHTML = "jij moet nog een half jaar werken om je doel te bereiken.";
    } else if (weken == 32) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 7 maanden werken om je doel te bereiken.";
    } else if (weken == 36) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 8 maanden werken om je doel te bereiken.";
    } else if (weken == 40) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 9 maanden werken om je doel te bereiken.";
    } else if (weken == 44) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 10 maanden werken om je doel te bereiken.";
    } else if (weken == 48) {
        document.getElementById("aanw").innerHTML = "jij moet nog een 11 maanden werken om je doel te bereiken.";
    } else if (weken == 52) {
        document.getElementById("aanw").innerHTML = "jij moet nog een jaar werken om je doel te bereiken.";
    } else {}
}

function maakEvent() {
    document.getElementById('prijs').onchange = tijd;
    document.getElementById('uur').onchange = tijd;
    document.getElementById('uurpw').onchange = tijd;

}

window.onload = maakEvent;