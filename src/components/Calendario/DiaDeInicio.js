import React from "react";

function DiaDeInicio( {mes, anio} ){
    // const [anio] = React.useState((new Date().getFullYear()))
    const DIA_DE_INICIO = new Date(anio, mes-1, 0).getDay()+1
    let diaAnterior = new Date(anio, mes-1, 0).getDate()
    
    return <React.Fragment>
        {Array.from(Array(DIA_DE_INICIO).keys()).map((e, index, x)=>{
            return <div style={{color: 'gray'}} key={index}> {diaAnterior - Math.abs(index-DIA_DE_INICIO+1)} </div>
        })}
    </React.Fragment>
}

export {DiaDeInicio}