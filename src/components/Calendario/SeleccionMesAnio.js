import React from "react";

function SeleccionMesAnio({DATA_INFO, anioAnterior, anioSiguiente, mesAnterior, mesSiguiente}){
    function getMes(){
        let nameMes = DATA_INFO.toLocaleString('default', {month: 'long'})
        return `${nameMes.toUpperCase()}`
        // ${nameMes.slice(1, 10)}
    }
    function getAnio(){
        return DATA_INFO.toString().split(" ")[3]
    }
    return <div className="__SeleccionMesAnio__">
        <div>
            <button className="btn" onClick={mesAnterior}> 
                <b className="bi bi-arrow-left-circle"></b> 
            </button>
            <h3>{ getMes() }</h3>
            <button className="btn" onClick={mesSiguiente}> 
                <b className="bi bi-arrow-right-circle"></b> 
            </button>
        </div>
        <div>
            <button className="btn" onClick={anioAnterior}>
                <b className="bi bi-arrow-left-circle"></b> 
            </button>
            <h3>{getAnio()}</h3>
            <button className="btn" onClick={anioSiguiente}>
                <b className="bi bi-arrow-right-circle"></b> 
            </button>
        </div>
    </div>
}

export {SeleccionMesAnio}