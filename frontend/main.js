document.getElementById("cmmas1").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas1").value);
    let actual = parseInt(document.getElementById("monedas1").innerHTML);
    document.getElementById("monedas1").innerHTML = (cantidad+actual).toString();
};
document.getElementById("emas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)+1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
};
document.getElementById("emenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)-1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)+1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
};
document.getElementById("mmenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)-1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
};