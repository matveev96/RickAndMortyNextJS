import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import type {GetStaticPaths, GetStaticProps} from "next";
import {API} from "@/assets/api/api";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";
import {useRouter} from "next/router";
import style from '@/styles/Home.module.css'

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

    const router = useRouter()

    // Если используем fallback: true в staticPaths и хотим показывать какой-то лоадер во время подгрузки, можно использовать router.isFallback, но поисковой робот будет видеть этот лоадер, а не информацию со странички
    if(router.isFallback) return <h1>Loading...</h1>

    const characterIDFromRouter = router.query.id

    const goToCharactersHandler = () => router.push('/characters/')

    return (
        <>
            <HeadMeta title={"Characters"}/>
            <div>ID: {characterIDFromRouter}</div>
            <CharacterCard character={character}/>
            <div className={style.buttons}>
                <button  onClick={goToCharactersHandler}>GO TO CHARACTERS</button>
            </div>

        </>
    );
}

Character.getLayout = getLayout;
export default Character;
