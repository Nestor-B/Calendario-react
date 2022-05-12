import React from "react";

function DiasDeLaSemana(){
    const DIAS_DE_LA_SEMANA = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    return <React.Fragment>
        {DIAS_DE_LA_SEMANA.map((e, index)=>{
            return <div className="lead npointer" key={index}>{e}</div>
        })}
    </React.Fragment>
}

export {DiasDeLaSemana}