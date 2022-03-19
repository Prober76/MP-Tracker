var espaciosT = new Chart(
    document.getElementById('espaciosT').getContext('2d'), {
    type: 'bar',
    data: {
        labels: [
            document.getElementById("nomEq1").value,
            document.getElementById("nomEq2").value,
            document.getElementById("nomEq3").value,
            document.getElementById("nomEq4").value
        ],
        datasets: [{
            label: '# Espacios evento',
            data: [
                parseInt(document.getElementById("espacios1").innerHTML),
                parseInt(document.getElementById("espacios2").innerHTML),
                parseInt(document.getElementById("espacios3").innerHTML),
                parseInt(document.getElementById("espacios4").innerHTML)
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var minijuegosT = new Chart(
    document.getElementById("minijuegosT").getContext("2d"),
    {
        type: 'bar',
        data: {
            labels: [
                document.getElementById("nomEq1").value,
                document.getElementById("nomEq2").value,
                document.getElementById("nomEq3").value,
                document.getElementById("nomEq4").value
            ],
            datasets: [{
                label: '# Minijuegos ganados',
                data: [
                    parseInt(document.getElementById("minijuegos1").innerHTML),
                    parseInt(document.getElementById("minijuegos2").innerHTML),
                    parseInt(document.getElementById("minijuegos3").innerHTML),
                    parseInt(document.getElementById("minijuegos4").innerHTML)
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
});
var monedasT = new Chart(
    document.getElementById("monedasT").getContext("2d"),
    {
        type: 'bar',
        data: {
            labels: [
                document.getElementById("nomEq1").value,
                document.getElementById("nomEq2").value,
                document.getElementById("nomEq3").value,
                document.getElementById("nomEq4").value
            ],
            datasets: [{
                label: '# Monedas ganadas',
                data: [
                    parseInt(document.getElementById("monedas1").innerHTML),
                    parseInt(document.getElementById("monedas2").innerHTML),
                    parseInt(document.getElementById("monedas3").innerHTML),
                    parseInt(document.getElementById("monedas4").innerHTML)
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
});

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