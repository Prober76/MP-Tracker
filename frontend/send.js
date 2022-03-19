document.getElementById('enviarDatos').onclick = () => {
    
    fetch("/enviarDatos",{
        method: 'POST',
        body: JSON.stringify({
            "usuario": document.getElementById("usuarioEnviar").value,
            "fecha": (new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate(),
            "equipo1": document.getElementById("nomEq1").value,
            "eventos1": parseInt(document.getElementById("espacios1").innerHTML),
            "minijuegos1": parseInt(document.getElementById("minijuegos1").innerHTML),
            "monedas1": parseInt(document.getElementById("monedas1").innerHTML),
            "equipo2": document.getElementById("nomEq2").value,
            "eventos2": parseInt(document.getElementById("espacios2").innerHTML),
            "minijuegos2": parseInt(document.getElementById("minijuegos2").innerHTML),
            "monedas2": parseInt(document.getElementById("monedas2").innerHTML),
            "equipo3": document.getElementById("nomEq3").value,
            "eventos3": parseInt(document.getElementById("espacios3").innerHTML),
            "minijuegos3": parseInt(document.getElementById("minijuegos3").innerHTML),
            "monedas3": parseInt(document.getElementById("monedas3").innerHTML),
            "equipo4": document.getElementById("nomEq4").value,
            "eventos4": parseInt(document.getElementById("espacios4").innerHTML),
            "minijuegos4": parseInt(document.getElementById("minijuegos4").innerHTML),
            "monedas4": parseInt(document.getElementById("monedas4").innerHTML)
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    document.getElementById("guardar").innerHTML = "<h2>Datos guardados con el nombre: "+document.getElementById("usuarioEnviar").value+"</h2>";
};