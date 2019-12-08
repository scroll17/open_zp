import React from 'react';
import style from './Radiation.module.sass'
import LineGraphRadiation from "../LineGraphs/LineGraphRadiation/LineGraphRadiation";

export default function Radiation() {
    return(
        <div className={style.container}>
            <LineGraphRadiation />
        </div>
    )
}