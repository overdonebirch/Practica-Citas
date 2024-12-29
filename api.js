import { mostrarAlerta } from "./ui.js";
const form = document.querySelector("form")
const url = "http://localhost:3000/citas";

export async function guardarCita(cita){
    console.log(cita);

    try{
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(cita),
            headers:  {"Content-Type": "application/json"}
        })
        mostrarAlerta("Cita guardada",form,"exito");
    }
    catch(error){
        mostrarAlerta(form,error)
    }
}