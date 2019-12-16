import React from 'react';
import Modal from '../Modal';
import StatictisBlock from './ModalComponents/StatisticBlock';
import "../../App.css";

export default function ModalStatistic(props) {
    return (
        <Modal isOpen={props.isOpen} closeWindow={props.function} modal={props.item}>
            <div className="Flex">
                <StatictisBlock statisticInfo="Album" item={props.item.album.title}>
                    <img className="IconSong" src={props.item.album.cover} alt="Album"/>
                </StatictisBlock>
                <StatictisBlock statisticInfo="Rank" item={props.item.type}>
                    <h1 className="RankH1">{props.item.rank}</h1>
                </StatictisBlock>
            </div>
        </Modal>
    )
}