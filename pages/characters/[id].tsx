import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import type {GetStaticPaths, GetStaticProps} from "next";
import {API} from "@/assets/api/api";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";

export const getStaticPaths: GetStaticPaths = async () => {

    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map(character => {
        return {params: {id: String(character.id)}}
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string)

    if(!character) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            character
        }
    }
}

type PropsType = {
    character: CharacterType
}

function Character({ character }: PropsType) {

    // const character = useCharacter() если используем useEffect (работа как с обычным React)

    return (
        <>
            <HeadMeta title={"Characters"}/>
            {character && <CharacterCard character={character}/>}
        </>
    );
}

Character.getLayout = getLayout;
export default Character;
