import React from 'react';
import "../../App.css";

export default function ArtistInfo(props) {
    return (
        <div className="ArtistDiv">
            <img className="IconSong" src={props.item.artist.picture} alt="Icon Artist"/>
            <h1 className="ArtistName">{props.item.artist.name} - {props.item.title}</h1>
            {props.children}
        </div>
    )
}