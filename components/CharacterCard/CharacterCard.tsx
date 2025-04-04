import React from 'react';
import Image from "next/image";
import styles from './CharactersCard.module.scss'
import type {CharacterType} from "@/assets/api/rick-and-morty-api";
import aliveStatus from 'public/statuses/alive.png'
import deadStatus from 'public/statuses/dead.png'
import unknownStatus from 'public/statuses/unknown.png'
import Status from "@/components/Status/Status";

const statusImage = {
    Alive: aliveStatus,
    Dead: deadStatus,
    unknown: unknownStatus,
}

export const CharacterCard = (props: {character: CharacterType}) => {
    const {image, name, status} = props.character

    return (
            <div className={styles.characterCard}>
                <div className={styles.title}>
                    <p>{name}</p>
                    <Status src={statusImage[status]}/>
                </div>

                <Image src={image} alt={`Picture of ${name}`} width={300} height={300}/>
            </div>
    );
};
