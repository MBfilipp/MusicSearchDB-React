import React, { useState } from 'react';
import "../App.css";
import ArtistInfo from './LiMusicComponents/ArtistInfo';
import ButtonInfo from './LiMusicComponents/ButtonInfo';
import ModalStatistic from './LiMusicComponents/ModalStatistic';

function LiMusic(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="LiMusic">
            <ArtistInfo item={props.item}>
                <audio className="Audio" controls>
                    <source src={props.item.preview} type="audio/mpeg" />
                </audio>
            </ArtistInfo>
            <ButtonInfo function={() => setIsOpen(true)} />
            <ModalStatistic item={props.item} isOpen={isOpen} function={() => setIsOpen(false)}/>
        </li>
    );   
}

export default LiMusic;