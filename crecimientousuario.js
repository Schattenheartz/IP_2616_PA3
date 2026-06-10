// Crecimiento de Usuarios
function simular() {
    let cantidadInicial = parseInt(document.getElementById("cantidadInicial").value);
    let metaUsuarios = parseInt(document.getElementById("metaUsuarios").value);
    let cantidadActual = cantidadInicial;
    let dias = 0;
// Validaciones - Restricciones
    if (
        cantidadInicial <= 0 ||
        metaUsuarios <= 0 ||
        cantidadInicial >= metaUsuarios ||
        (metaUsuarios - cantidadInicial) > 4000
    ) {
        document.getElementById("resultado").innerHTML =
            "Los datos ingresados no son correctos.";
        return;
    }
// Calcular 
    while (cantidadActual < metaUsuarios) {
        dias++;
        if (cantidadActual < 1000) {
            cantidadActual += 50;
        }
        else if (cantidadActual < 3000) {
            cantidadActual += 80;
        }
        else {
            cantidadActual += 120;
        }

        if (dias % 7 === 0) {
            cantidadActual -= 100;
        }
    }
// Resultado
    document.getElementById("resultado").innerHTML =
        `La plataforma alcanza la meta en ${dias} días.`;
}