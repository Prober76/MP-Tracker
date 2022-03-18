// RECEPTORES PARA EL EQUIPO 1
//Monedas
document.getElementById("cmmas1").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas1").value);
    let actual = parseInt(document.getElementById("monedas1").innerHTML);
    document.getElementById("monedas1").innerHTML = (cantidad+actual).toString();
};
//espacios
document.getElementById("emas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)+1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
};
document.getElementById("emenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)-1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
};
//minijuegos
document.getElementById("mmas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)+1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)-1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
};

// RECEPTORES PARA EL EQUIPO 2
//Monedas
document.getElementById("cmmas2").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas2").value);
    let actual = parseInt(document.getElementById("monedas2").innerHTML);
    document.getElementById("monedas2").innerHTML = (cantidad+actual).toString();
};
//espacios
document.getElementById("emas2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios2").innerHTML)+1;
    document.getElementById("espacios2").innerHTML = valor_nuevo.toString();
};
document.getElementById("emenos2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios2").innerHTML)-1;
    document.getElementById("espacios2").innerHTML = valor_nuevo.toString();
};
//minijuegos
document.getElementById("mmas2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos2").innerHTML)+1;
    document.getElementById("minijuegos2").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmenos2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos2").innerHTML)-1;
    document.getElementById("minijuegos2").innerHTML = valor_nuevo.toString();
};

// RECEPTORES PARA EL EQUIPO 3
//Monedas
document.getElementById("cmmas3").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas3").value);
    let actual = parseInt(document.getElementById("monedas3").innerHTML);
    document.getElementById("monedas3").innerHTML = (cantidad+actual).toString();
};
//espacios
document.getElementById("emas3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios3").innerHTML)+1;
    document.getElementById("espacios3").innerHTML = valor_nuevo.toString();
};
document.getElementById("emenos3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios3").innerHTML)-1;
    document.getElementById("espacios3").innerHTML = valor_nuevo.toString();
};
//minijuegos
document.getElementById("mmas3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos3").innerHTML)+1;
    document.getElementById("minijuegos3").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmenos3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos3").innerHTML)-1;
    document.getElementById("minijuegos3").innerHTML = valor_nuevo.toString();
};

// RECEPTORES PARA EL EQUIPO 4
//Monedas
document.getElementById("cmmas4").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas4").value);
    let actual = parseInt(document.getElementById("monedas4").innerHTML);
    document.getElementById("monedas4").innerHTML = (cantidad+actual).toString();
};
//espacios
document.getElementById("emas4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios4").innerHTML)+1;
    document.getElementById("espacios4").innerHTML = valor_nuevo.toString();
};
document.getElementById("emenos4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios4").innerHTML)-1;
    document.getElementById("espacios4").innerHTML = valor_nuevo.toString();
};
//minijuegos
document.getElementById("mmas4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos4").innerHTML)+1;
    document.getElementById("minijuegos4").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmenos4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos4").innerHTML)-1;
    document.getElementById("minijuegos4").innerHTML = valor_nuevo.toString();
};