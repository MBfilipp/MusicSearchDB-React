import React from 'react';
import Portal from './Portal';
import '../App.css';

export default function Modal(props) {
    return (
        <Portal>
            {props.isOpen && 
                <>
                    <div className="ModalOverlay">
                        <div className="ModalWindow" ref={props.refModal}>
                            <div className="ModalHeader">
                                <h1 className="ModalHeaderH1">{props.modal.artist.name} - {props.modal.title}</h1>
                                <button className="BtnModal gradient" type="button" onClick={props.closeWindow}>&#10006;</button>
                            </div>
                            <div className="ModalBody">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </>
            }
        </Portal>
    )
}