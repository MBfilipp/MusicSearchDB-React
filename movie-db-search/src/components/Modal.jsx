import React from 'react';
import Portal from './Portal';
import '../App.css';

export default class Modal extends React.Component {

    render() {
        return (
            <Portal>
                {this.props.isOpen && 
                    <>
                        <div className="ModalOverlay">
                            <div className="ModalWindow">
                                <div className="ModalHeader">
                                    <h1 className="ModalHeaderH1">{this.props.modal.artist.name} - {this.props.modal.title}</h1>
                                    <button className="BtnModal gradient" type="button" onClick={this.props.closeWindow}>&#10148;</button>
                                </div>
                                <div className="ModalBody">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Portal>
        )
    }
}