//Cambios de nombre de equipos

document.getElementById("confirmEq1").onclick = () =>{
    espaciosT.data.labels[0] = document.getElementById("nomEq1").value;
    minijuegosT.data.labels[0] = document.getElementById("nomEq1").value;
    monedasT.data.labels[0] = document.getElementById("nomEq1").value;
    espaciosT.update();
    minijuegosT.update();
    monedasT.update();
};

document.getElementById("confirmEq2").onclick = () =>{
    espaciosT.data.labels[1] = document.getElementById("nomEq2").value;
    minijuegosT.data.labels[1] = document.getElementById("nomEq2").value;
    monedasT.data.labels[1] = document.getElementById("nomEq2").value;
    espaciosT.update();
    minijuegosT.update();
    monedasT.update();
};

document.getElementById("confirmEq3").onclick = () =>{
    espaciosT.data.labels[2] = document.getElementById("nomEq3").value;
    minijuegosT.data.labels[2] = document.getElementById("nomEq3").value;
    monedasT.data.labels[2] = document.getElementById("nomEq3").value;
    espaciosT.update();
    minijuegosT.update();
    monedasT.update();
};

document.getElementById("confirmEq4").onclick = () =>{
    espaciosT.data.labels[3] = document.getElementById("nomEq4").value;
    minijuegosT.data.labels[3] = document.getElementById("nomEq4").value;
    monedasT.data.labels[3] = document.getElementById("nomEq4").value;
    espaciosT.update();
    minijuegosT.update();
    monedasT.update();
};

// RECEPTORES PARA EL EQUIPO 1
//Monedas
document.getElementById("cmmas1").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas1").value);
    let actual = parseInt(document.getElementById("monedas1").innerHTML);
    document.getElementById("monedas1").innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[0] += cantidad;
    monedasT.update();
};
//espacios
document.getElementById("emas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)+1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
    // 
    espaciosT.data.datasets[0].data[0]++;
    espaciosT.update();
};
document.getElementById("emenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios1").innerHTML)-1;
    document.getElementById("espacios1").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[0]--;
    espaciosT.update();
};
//minijuegos
document.getElementById("mmas1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)+1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[0]++;
    minijuegosT.update();
};
document.getElementById("mmenos1").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos1").innerHTML)-1;
    document.getElementById("minijuegos1").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[0]--;
    minijuegosT.update();
};

// RECEPTORES PARA EL EQUIPO 2
//Monedas
document.getElementById("cmmas2").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas2").value);
    let actual = parseInt(document.getElementById("monedas2").innerHTML);
    document.getElementById("monedas2").innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[1] += cantidad;
    monedasT.update();
};
//espacios
document.getElementById("emas2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios2").innerHTML)+1;
    document.getElementById("espacios2").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[1]++;
    espaciosT.update();
};
document.getElementById("emenos2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios2").innerHTML)-1;
    document.getElementById("espacios2").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[1]--;
    espaciosT.update();
};
//minijuegos
document.getElementById("mmas2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos2").innerHTML)+1;
    document.getElementById("minijuegos2").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[1]++;
    minijuegosT.update();
};
document.getElementById("mmenos2").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos2").innerHTML)-1;
    document.getElementById("minijuegos2").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[1]--;
    minijuegosT.update();
};

// RECEPTORES PARA EL EQUIPO 3
//Monedas
document.getElementById("cmmas3").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas3").value);
    let actual = parseInt(document.getElementById("monedas3").innerHTML);
    document.getElementById("monedas3").innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[2] += cantidad;
    monedasT.update();
};
//espacios
document.getElementById("emas3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios3").innerHTML)+1;
    document.getElementById("espacios3").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[2]++;
    espaciosT.update();
};
document.getElementById("emenos3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios3").innerHTML)-1;
    document.getElementById("espacios3").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[2]--;
    espaciosT.update();
};
//minijuegos
document.getElementById("mmas3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos3").innerHTML)+1;
    document.getElementById("minijuegos3").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[2]++;
    minijuegosT.update();
};
document.getElementById("mmenos3").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos3").innerHTML)-1;
    document.getElementById("minijuegos3").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[2]--;
    minijuegosT.update();
};

// RECEPTORES PARA EL EQUIPO 4
//Monedas
document.getElementById("cmmas4").onclick = () => {
    let cantidad = parseInt(document.getElementById("cmonedas4").value);
    let actual = parseInt(document.getElementById("monedas4").innerHTML);
    document.getElementById("monedas4").innerHTML = (cantidad+actual).toString();
    monedasT.data.datasets[0].data[3] += cantidad;
    monedasT.update();
};
//espacios
document.getElementById("emas4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios4").innerHTML)+1;
    document.getElementById("espacios4").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[3]++;
    espaciosT.update();
};
document.getElementById("emenos4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("espacios4").innerHTML)-1;
    document.getElementById("espacios4").innerHTML = valor_nuevo.toString();
    espaciosT.data.datasets[0].data[3]--;
    espaciosT.update();
};
//minijuegos
document.getElementById("mmas4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos4").innerHTML)+1;
    document.getElementById("minijuegos4").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[3]++;
    minijuegosT.update();
};
document.getElementById("mmenos4").onclick = () => {
    let valor_nuevo = parseInt(document.getElementById("minijuegos4").innerHTML)-1;
    document.getElementById("minijuegos4").innerHTML = valor_nuevo.toString();
    minijuegosT.data.datasets[0].data[3]--;
    minijuegosT.update();
};