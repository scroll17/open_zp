import React, { useState, useLayoutEffect, useMemo } from 'react'

import Chart from "chart.js";
import connect from "react-redux/es/connect/connect";
import style from "./LineGraphRadiation.module.sass";

import { last } from 'lodash';

import createChartOptions from "../../../utils/createChartOptions";
import { getStatusOfRadiation } from "../../../actions/actionCreators/radiationCreators";

function LineGraph(props){
    const { statusOfRadiation, months, label } = props;
    const [monthNow, setMonthNow] = useState(last(months));
    const chartRef = React.createRef();

    const showMouths = useMemo(() => {
        return months.map( month => {
            const selectMonth = month === monthNow ? style.selectMonth : '';
            return (
                <div
                    className={`${style.month} ${selectMonth}`}
                    key={month}
                    onClick={() => setMonthNow(month)}
                >
                    {month}
                </div>
            )
        })
    }, [months, monthNow]);

    useLayoutEffect(() => {
        props.getStatusOfRadiation();
    }, []);

    useLayoutEffect(() => {
        setMonthNow(last(months));
    }, [months]);

    useLayoutEffect(() => {
        if(statusOfRadiation[monthNow]){
            const { data, labels } = statusOfRadiation[monthNow];
            const myChartRef = chartRef.current.getContext("2d");
            const gradient = myChartRef.createLinearGradient(0, 0, 0, 450);

            gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
            gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            const { dataForChart, options } = createChartOptions(labels, data, label, gradient );

            new Chart(myChartRef, {
                type: "line",
                data: dataForChart,
                options: options
            });
        }
    });

    return (
        <div className={style.lineChart}>
            <div className={style.monthList}>
                {showMouths}
            </div>
            <div className={style.aspectRatio}>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    statusOfRadiation: state.radiationReducer.statusOfRadiation,
    months: state.radiationReducer.months,
    label: state.radiationReducer.label,
});
const mapDispatchToProps = dispatch => ({
    getStatusOfRadiation: () => dispatch(getStatusOfRadiation()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);