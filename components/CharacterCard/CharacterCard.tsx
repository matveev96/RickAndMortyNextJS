import React from 'react';
import Image from "next/image";
import {type CharacterType} from "@/assets/hooks/useCharacters";
import styles from './CharactersCard.module.scss'

export const CharacterCard = (props: {character: CharacterType}) => {
    const {character} = props
    return (
            <div className={styles.characterCard}>
                <p>{character.name}</p>
                <Image src={character.image} alt={`Picture of ${character.name}`} width={300} height={300}/>
            </div>
    );
};
