import { guardarCita } from "./api.js";
import {mostrarAlerta} from "./ui.js"
const form = document.querySelector("form")
const clienteInput = document.querySelector("#cliente");
const diaInput = document.querySelector("#dia");
const horaInput = document.querySelector("#hora");

let cita  ={
    cliente: "",
    dia: "",
    hora: ""
}

document.addEventListener("DOMContentLoaded",iniciarApp);

function iniciarApp(){
    eventListeners();
}

function eventListeners(){
    form.addEventListener("submit",crearCita);
}

function crearCita(e){
    e.preventDefault();
    let cliente = clienteInput.value;
    let dia = diaInput.value;
    let hora = horaInput.value;

    cita = {cliente,dia,hora};
    if(!validarCampos(cita)){
        mostrarAlerta(form,"No debe haber campos vacios","error");
        return;
    }
    let confirmar =  confirm("Quieres añadir esta cita?")

    if(confirmar){
        guardarCita(cita)
    }
 
}

function validarCampos(cita){
    return !Object.values(cita).includes("");
}
