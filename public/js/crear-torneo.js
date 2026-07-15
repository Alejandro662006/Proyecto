var disciplina = document.getElementById("disciplina");
var disciplinaOtro = document.getElementById("disciplinaOtro");
var tipoTorneo = document.getElementById("tipo_torneo");
var opcionesLiga = document.getElementById("opcionesLiga");
var opcionesEliminacion = document.getElementById("opcionesEliminacion");
var opcionesSuizo = document.getElementById("opcionesSuizo");

disciplina.addEventListener("change", function () {
    if (disciplina.value === "otro") {
        disciplinaOtro.style.display = "flex";
    } else {
        disciplinaOtro.style.display = "none";
    }
});

tipoTorneo.addEventListener("change", function () {
    opcionesLiga.style.display = "none";
    opcionesEliminacion.style.display = "none";
    opcionesSuizo.style.display = "none";

    if (tipoTorneo.value === "liga") {
        opcionesLiga.style.display = "flex";
    } else if (tipoTorneo.value === "eliminacion") {
        opcionesEliminacion.style.display = "block";
    } else if (tipoTorneo.value === "suizo") {
        opcionesSuizo.style.display = "flex";
    }
});
