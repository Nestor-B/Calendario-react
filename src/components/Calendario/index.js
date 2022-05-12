import React from "react";

import { SeleccionMesAnio } from "./SeleccionMesAnio";
import { DiasDeLaSemana } from "./DiasDeLaSemana";
import { DiaDeInicio } from "./DiaDeInicio"
import { DiasPorMes } from "./DiasPorMes";
import { InfoCalendario } from "./InfoCalendario";

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./index.css"

function Calendario(){
    const [ mes, setMes ] = React.useState( new Date().getMonth() + 1 )
    const [ anio, setAnio ] = React.useState( new Date().getFullYear() )
    const DATA_INFO = new Date(anio, mes-1)
    const diasSiguientes = ( 6 - new Date(anio, mes, 0).getDay() )

    function anioSiguiente(){
        setAnio( anio => anio+1 )
    }
    function anioAnterior(){
        setAnio( anio => anio-1 )
    }

    function mesSiguiente(){
        setMes(mes => mes<12?mes+1:mes)
    }
    function mesAnterior(){
        setMes(mes => mes>1?mes-1:mes)
    }
    return <div className="container-calendary m-auto">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h1 className="display-4">Calendario</h1>
        </div>
        
        <SeleccionMesAnio 
            DATA_INFO={DATA_INFO} 
            anioAnterior={anioAnterior}
            anioSiguiente={anioSiguiente}
            mesAnterior={mesAnterior}
            mesSiguiente={mesSiguiente}
        />

        <InfoCalendario setMes={setMes} setAnio={setAnio} />

        <div className={`grid`}>
            <DiasDeLaSemana />
            <DiaDeInicio anio={anio} mes={mes} />
            <DiasPorMes anio={anio} mes={mes} />

            {Array.from(Array(diasSiguientes).keys()).map((e)=>{
                return <div style={{color: 'gray'}} key={e}>{e+1}</div>
            })}
        </div>        


    </div>
}

export {Calendario}