// alert("hola");

let nodo = document.getElementById("tabla");
let numeroid = 1;


function imp_fila(){
    if(nombre.value!="" && apellido.value!="" && telefono.value!="" && correo.value!=""){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let telefono = document.getElementById("telefono").value;
        let correo = document.getElementById("correo").value;
        
        let imprimirtr  = document.createElement("tr"),
        imprimirtd1  = document.createElement("td"),
        imprimirtd2  = document.createElement("td"),
        imprimirtd3  = document.createElement("td"),
        imprimirtd4  = document.createElement("td"),
        imprimirtd5  = document.createElement("td"),
        contenido1 = document.createTextNode(nombre),
        contenido2 = document.createTextNode(apellido),
        contenido3 = document.createTextNode(telefono),
        contenido4 = document.createTextNode(correo),
        contenido5  = document.createElement("button"),
        holita = document.createTextNode("Eliminar"),
        contenido6  = document.createElement("button"),
        holita2 = document.createTextNode("editar");
        nodo.appendChild(imprimirtr);
        imprimirtr.appendChild(imprimirtd1);
        imprimirtd1.appendChild(contenido1);

        imprimirtr.appendChild(imprimirtd2);
        imprimirtd2.appendChild(contenido2);

        imprimirtr.appendChild(imprimirtd3);
        imprimirtd3.appendChild(contenido3);

        imprimirtr.appendChild(imprimirtd4);
        imprimirtd4.appendChild(contenido4);

        imprimirtr.appendChild(imprimirtd5);
        imprimirtd5.appendChild(contenido5);
        contenido5.appendChild(holita);
        imprimirtr.appendChild(imprimirtd5);
        imprimirtd5.appendChild(contenido6);
        contenido6.appendChild(holita2);
        contenido5.setAttribute("id","eliminar"+numeroid);
        contenido5.setAttribute("onclick","eliminar()");
        contenido5.setAttribute("class","d-inline-block");
        contenido6.setAttribute("id","editar"+numeroid);
        contenido6.setAttribute("onclick","editar()");
        contenido6.setAttribute("class","d-inline-block");

        numeroid+=1;
        document.getElementById("alerta").innerHTML = "";
    }else{
        let alerta = `<div class="alert alert-danger" role="alert">
                        No pueden haber campos vacios!
                    </div>`;
        document.getElementById("alerta").innerHTML = alerta;
    }
}

function eliminar(){
        const btns = document.querySelectorAll('button[id^="eliminar"]');
        btns.forEach((btn) => {
        btn.addEventListener('click', e => {
            let id = e.target.id;
            let botonclicado =  document.getElementById(id);
            let padre = botonclicado.parentNode;
            let abulo = padre.parentNode;
            let bisabuelo = abulo.parentNode;
            bisabuelo.removeChild(abulo)
        });
        });
    // nodo = document.getElementById("tabla")
    // let primertr = contenido5.parentNode;
    // console.log(primertr);
    // nodo.removeChild(primertr)
}

function editar(){
    const btns = document.querySelectorAll('button[id^="editar"]');
    btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        let id = e.target.id;
        let botonclicado =  document.getElementById(id);
        let padre = botonclicado.parentNode;
        let abulo = padre.parentNode;
        let bisabuelo = abulo.parentNode;
        traervalores();
        if(nombre.value!="" && apellido.value!="" && telefono.value!="" && correo.value!=""){
            abulo.innerHTML = '';
            
            let imprimirtd1  = document.createElement("td"),
            imprimirtd2  = document.createElement("td"),
            imprimirtd3  = document.createElement("td"),
            imprimirtd4  = document.createElement("td"),
            imprimirtd5  = document.createElement("td"),
            contenido1 = document.createTextNode(nombre.value),
            contenido2 = document.createTextNode(apellido.value),
            contenido3 = document.createTextNode(telefono.value),
            contenido4 = document.createTextNode(correo.value),
            contenido5  = document.createElement("button"),
            holita = document.createTextNode("Eliminar"),
            contenido6  = document.createElement("button"),
            holita2 = document.createTextNode("editar");
            abulo.appendChild(imprimirtd1);
            imprimirtd1.appendChild(contenido1);
        
            abulo.appendChild(imprimirtd2);
            imprimirtd2.appendChild(contenido2);
        
            abulo.appendChild(imprimirtd3);
            imprimirtd3.appendChild(contenido3);
        
            abulo.appendChild(imprimirtd4);
            imprimirtd4.appendChild(contenido4);
        
            abulo.appendChild(imprimirtd5);
            imprimirtd5.appendChild(contenido5);
            contenido5.appendChild(holita);
            abulo.appendChild(imprimirtd5);
            imprimirtd5.appendChild(contenido6);
            contenido6.appendChild(holita2);
            contenido5.setAttribute("id","eliminar"+numeroid);
            contenido5.setAttribute("onclick","eliminar()");
            contenido5.setAttribute("class","d-inline-block");
            contenido6.setAttribute("id","editar"+numeroid);
            contenido6.setAttribute("onclick","editar()");
            contenido6.setAttribute("class","d-inline-block");

            document.getElementById("alerta").innerHTML = "";
        }else{
            let alerta = `<div class="alert alert-danger" role="alert">
                            No pueden haber campos vacios!
                        </div>`;
            document.getElementById("alerta").innerHTML = alerta;
        }

        
    });
    });
}

function traervalores(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

}

