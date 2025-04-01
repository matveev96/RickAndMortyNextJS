import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";
import {API} from "@/assets/api/api";
import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import styles from "@/styles/Home.module.css";


export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props: {
            characters,
        }
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

function Characters(props: PropsType) {

    // const characters = useCharacters() если используем useEffect (работа как с обычным React)

    const {characters} = props;

    const characterList = characters.results.map(character => (
        <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard character={character}/>
        </Link>
    ))
    return (
        <>
            <HeadMeta title={"Characters"}/>
            <div className={styles.cards}>
                {characterList}
            </div>

        </>
    );
}

Characters.getLayout = getLayout;
export default Characters;
