import React from 'react';
import "../../App.css";

export default function ButtonInfo(props) {
    return (
        <div className="ButtonDiv">
            <button className="Btn gradient" type="button" onClick={props.function}>Info</button>
        </div>
    )
}