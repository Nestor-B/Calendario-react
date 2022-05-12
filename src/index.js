import React from "react"
import reactDom from "react-dom/client"
import {Calendario} from "./components/Calendario/index"

reactDom
    .createRoot(document.querySelector('#root'))
    .render(
        <div>
            <Calendario />
        </div>
)