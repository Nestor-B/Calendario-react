import React from "react"
import Swal from "sweetalert2"

export function InfoCalendario( {setMes, setAnio} ){
    function infoEvent(){
        Swal.fire({
            position: 'center',
            title: 'Aviso!',
            icon: 'warning',
            text: 'Haga doble clic en un día especifico para crear un nuevo evento.',
            showConfirmButton: false,
            timer: 5000
        }).then(()=>{
            // alert()
        })
    }
    function setDiaActual(){
        setMes( (new Date()).getMonth()+1 )
        setAnio( (new Date()).getFullYear() )
    }
    return  <div className="my-0 d-flex justify-content-evenly">
        <div className="d-flex align-items-center">
            <p className="py-1 px-5 bg-success" style={{cursor: 'pointer'}} onClick={setDiaActual}></p>
            <p className="px-1">Día actual</p>
        </div>
        <div className="d-flex align-items-center">
            <p className="px-1">Eventos</p>
            <p className="py-1 px-5 bg-danger" style={{cursor: 'pointer'}} onClick={infoEvent}></p>
        </div>            
    </div>
}