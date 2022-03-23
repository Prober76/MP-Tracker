nameUGraph = (num) => {
    espaciosT.data.labels[num-1] = document.getElementById("nomEq"+num.toString()).value;
    minijuegosT.data.labels[num-1] = document.getElementById("nomEq"+num.toString()).value;
    monedasT.data.labels[num-1] = document.getElementById("nomEq"+num.toString()).value;
    espaciosT.update();
    minijuegosT.update();
    monedasT.update();
};

opEspMin = (idPrefix, num, cantidad) => {
    let valor_nuevo = parseInt(document.getElementById(idPrefix+num.toString()).innerHTML)+cantidad;
    document.getElementById(idPrefix+num.toString()).innerHTML = valor_nuevo.toString();
    if(idPrefix == "espacios"){
        espaciosT.data.datasets[0].data[num-1] = cantidad + espaciosT.data.datasets[0].data[num-1];
        espaciosT.update();
    }
    else if(idPrefix == "minijuegos"){
        minijuegosT.data.datasets[0].data[num-1] = cantidad + minijuegosT.data.datasets[0].data[num-1];
        minijuegosT.update();
    }
};

opMonedasCustom = (num) => {
    let cantidad = parseInt(document.getElementById("cmonedas"+num.toString()).value);
    let actual = parseInt(document.getElementById("monedas"+num.toString()).innerHTML);
    document.getElementById("monedas"+num.toString()).innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[num-1] += cantidad;
    monedasT.update();
};

// Falta terminar botones predeterminados
opMonedas = (num, cantidad) => {
    let valor_nuevo = parseInt(document.getElementById(idPrefix+num.toString()).innerHTML)+cantidad;
    document.getElementById("monedas"+num.toString()).innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[num-1] += cantidad;
    monedasT.update();
}

//Cambios de nombre de equipos

document.getElementById("confirmEq1").onclick = () =>{ nameUGraph(1); };
document.getElementById("confirmEq2").onclick = () =>{ nameUGraph(2); };
document.getElementById("confirmEq3").onclick = () =>{ nameUGraph(3); };
document.getElementById("confirmEq4").onclick = () =>{ nameUGraph(4); };

document.getElementById("cmmas1").onclick = () => { opMonedasCustom(1); };
document.getElementById("emas1").onclick = () => { opEspMin("espacios", 1, 1); };
document.getElementById("emenos1").onclick = () => { opEspMin("espacios", 1, -1); };
document.getElementById("mmas1").onclick = () => { opEspMin("minijuegos", 1, 1); };
document.getElementById("mmenos1").onclick = () => { opEspMin("minijuegos", 1, -1); };

document.getElementById("cmmas2").onclick = () => { opMonedasCustom(2); };
document.getElementById("emas2").onclick = () => { opEspMin("espacios", 2, 1); };
document.getElementById("emenos2").onclick = () => { opEspMin("espacios", 2, -1); };
document.getElementById("mmas2").onclick = () => { opEspMin("minijuegos", 2, 1); };
document.getElementById("mmenos2").onclick = () => { opEspMin("minijuegos", 2, -1); };

document.getElementById("cmmas3").onclick = () => { opMonedasCustom(3); };
document.getElementById("emas3").onclick = () => { opEspMin("espacios", 3, 1); };
document.getElementById("emenos3").onclick = () => { opEspMin("espacios", 3, -1); };
document.getElementById("mmas3").onclick = () => { opEspMin("minijuegos", 3, 1); };
document.getElementById("mmenos3").onclick = () => { opEspMin("minijuegos", 3, -1); };

document.getElementById("cmmas4").onclick = () => { opMonedasCustom(4); };
document.getElementById("emas4").onclick = () => { opEspMin("espacios", 4, 1); };
document.getElementById("emenos4").onclick = () => { opEspMin("espacios", 4, -1); };
document.getElementById("mmas4").onclick = () => { opEspMin("minijuegos", 4, 1); };
document.getElementById("mmenos4").onclick = () => { opEspMin("minijuegos", 4, -1); };