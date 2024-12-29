

export function mostrarAlerta(referencia,msg,clase){
    let primerElemento = referencia.firstElementChild;
    let p = document.createElement("p");
    p.classList.add(clase);
    p.textContent = msg;

    if(!alertaDuplicada(p,primerElemento))
        referencia.insertBefore(p,primerElemento);

    setTimeout(() => {
        p.remove();
    },1500)
}

function alertaDuplicada(p,primerElemento){
    let condicion1= p.classList.contains("error") && primerElemento.classList.contains("error");
    let condicion2 = p.textContent === primerElemento.textContent;
    return condicion1 && condicion2;
}