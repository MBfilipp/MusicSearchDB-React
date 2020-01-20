import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal(props) {
    let el = document.createElement("div");
    useEffect(() => {
        document.body.appendChild(el);
        return document.body.removeChild(el);
    })

    return ReactDOM.createPortal(props.children, el)   
}