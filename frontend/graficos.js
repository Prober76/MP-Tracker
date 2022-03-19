// Graficos de data

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