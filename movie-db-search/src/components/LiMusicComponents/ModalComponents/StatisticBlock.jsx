import React from 'react';
import "../../../App.css";

export default function StatisticBlock(props) {
    return (
        <div className="Statistic">
            <h1 style={{ paddingBottom: "20px" }} className="StatisticTitle">{props.statisticInfo} - {props.item}</h1>
            {props.children}
        </div>
    )
}