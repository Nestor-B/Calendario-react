// - CONFIG POR DEFECTO ------------------------------------
import Swal from "sweetalert2";
import jsonData from "./jsonData"

// Reparar colision de dias
// ejem dia seleccionado en mes de mayo
// se muestra usado en mes de abril

export function REQUERIR_EVENTOS_SALVADOS(){
    // fetch o import data
    return jsonData
}

export function GUARDAR_EVENTO( diasConEventos, dia, anio, mes, setDiaEnEventos ){
    // Opciones
    // 1 - alertsweet
    // 2 - *
    Swal.fire({
        text: `¿Confirmas programar un evento para el día ${dia}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Formulario de detalles',
                showCancelButton: true,
                confirmButtonText: 'Guardar información',
                html: `
                    <div style="text-align: left;" class="p-2">   
                        <div class="lead my-2">Titulo</div>
                        <div>
                            <input id="titulo" type="text" class="form-control" placeholder="Escribe aquí" />
                        </div>

                        <div class="my-2">
                            <div class="lead my-2">Notas</div>
                            <textarea id="descripcion" class="form-control" placeholder="Descripción"></textarea/>
                        </div>
                        <div class="my-2">
                            <div class="lead my-2">Planificación</div>
                            <input id="fecha" type="date" class="form-control" />
                        </div>
                    </div>
                `,
                focusConfirm: false,
                preConfirm: () => {
                    // console.log('--')
                    setDiaEnEventos( e => [ ...diasConEventos, {dia: dia, infoFecha: `${anio} ${mes}`, titulo: document.getElementById('titulo').value, nota: document.getElementById('descripcion').value, paraFecha:  document.getElementById('fecha').value} ] );
                    // console.log('Error')
                    setTimeout(()=>{
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Evento Agregado.',
                            showConfirmButton: false,
                            timer: 500
                        })
                    }, 100)
                }
            })
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}
 
export function MOSTRAR_DETALLES_EVENTO( {dia, titulo, nota, infoFecha, paraFecha}, diasConEventos, setDiaEnEventos ){
    // alert(titulo, nota, infoFecha)
    Swal.fire({
        title: 'Detalles del Evento',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cerrar`,
        html: `
            <div style="text-align: left;" class="p-2">   
                <div class="lead my-2">Titulo</div>
                <div class="mx-1">
                    <p> ${titulo} </p>
                </div>

                <div class="my-2">
                    <div class="lead my-2">Nota</div>
                    <p class="mx-1"> ${nota} </p>
                </div>
                <div class="my-2">
                    <div class="lead my-2">Planificación</div>
                    <p class="mx-1"> ${paraFecha} </p>
                </div>
            </div>
        `
    }).then((result) => {
        if (result.isConfirmed) {
            const a = diasConEventos.filter( function(e){
                if( e.dia +' - '+e.infoFecha === dia +' - '+ infoFecha ){
                    return null
                }
                return e
            } )
            setDiaEnEventos(a)
        }
    })
}