
const Json = cargarDatos()


document.getElementById("BotonJ").addEventListener('click', function (event) {
    event.preventDefault();
    alert("hola")
    console.log("hola")
    console.log(Json)
})
async function cargarDatos() {
    const response = await fetch('Lectura.Json');
    const datos = await response.json();
    return datos;
}


