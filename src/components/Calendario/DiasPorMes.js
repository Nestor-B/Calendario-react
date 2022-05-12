import React from "react";
import Swal from "sweetalert2";
import { REQUERIR_EVENTOS_SALVADOS, GUARDAR_EVENTO, MOSTRAR_DETALLES_EVENTO } from "./GuardarEventos"

let data_remote = REQUERIR_EVENTOS_SALVADOS()

function DiasPorMes({anio, mes}){
    const DIAS_EN_MES = new Date(anio, mes, 0).getDate()
    const [ diasConEventos, setDiaEnEventos ] = React.useState([])
    const AnioActual = new Date().getFullYear()
    const MesActual = new Date().getMonth()
    const DiaActual = new Date().getDate()

    React.useEffect(function(){
        if( diasConEventos.length === 0 ) {
            setDiaEnEventos( data_remote )
        }
    }, [diasConEventos])

    function NumeroDeDias(){
        let arr = [...Array.from(Array(DIAS_EN_MES).keys())]
        arr.push(arr.length)
        return arr.slice(1)
    }
    function MarcarDiaDeHoy(e){
        return mes === (new Date().getMonth()+1) && 
            anio === (new Date().getFullYear()) && 
            e===(new Date().getDate())?'bg-success text-white':''
    }
    function AgregarEventoEnDiaSeleccionado(e){
        let dia = e
        let s = diasConEventos.find(function(e){
            if( e.dia === dia && e.infoFecha === `${anio} ${mes}` ){
                return true
            }
            return false
        })
        if( !!s ) {
            MOSTRAR_DETALLES_EVENTO(diasConEventos.find( function(e) {
                return e.dia === dia && e.infoFecha === `${anio} ${mes}`?(e):null;
            } ), diasConEventos, setDiaEnEventos)          
        }
        else{
            if( (anio > AnioActual && mes > MesActual+1 && dia > DiaActual ) || (anio >= AnioActual && mes > MesActual+1 && dia > 0 ) ){
                GUARDAR_EVENTO( diasConEventos, dia, anio, mes, setDiaEnEventos )
            }
            else if ( (anio === AnioActual && mes === MesActual+1 && dia >= DiaActual ) ) {
                GUARDAR_EVENTO( diasConEventos, dia, anio, mes, setDiaEnEventos )
            }else{
                Swal.fire({
                    position: 'center',
                    title: 'Aviso!',
                    icon: 'warning',
                    text: 'No se puede elegir un tiempo pasado para un evento.',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        }
    }
    function MarcarDiaConEvento(e){
        // Hace recorrido y verifica
        return diasConEventos.filter(ev => ev.dia === e && ev.infoFecha === `${anio} ${mes}`?(true):false)
    }
    return <React.Fragment>
        {NumeroDeDias().map((e, index)=>{
            return <div className={`
            ${MarcarDiaDeHoy(e)} 
            ${MarcarDiaConEvento(e).length === 1?'bg-danger text-white':''} d-flex justify-content-between`} 
            key={e} 
            onDoubleClick={AgregarEventoEnDiaSeleccionado.bind(null, e)}
            >
                <span>{e} {MarcarDiaDeHoy(e)?'Hoy':''}</span>
                <small> {MarcarDiaConEvento(e).length === 1?<b className="bi bi-calendar-event-fill"></b>:''} </small>
            </div>
        })}
    </React.Fragment>
}

export {DiasPorMes}