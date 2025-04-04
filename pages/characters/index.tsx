import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";
import {API} from "@/assets/api/api";
import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import styles from "@/styles/Home.module.css";
import {type GetServerSideProps} from 'next'
import {useRouter} from "next/router";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = new Headers({ 'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=100' });
    context.res.setHeaders(headers)

    const page = Number(context.query.page) || 1;

    const characters = await API.rickAndMorty.getCharacters({page})
    return {
        props: {
            characters,
            page
        }
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>,
    page: number,
}

function Characters(props: PropsType) {

    // const characters = useCharacters() если используем useEffect (работа как с обычным React)

    const {characters, page} = props;

    const router = useRouter();

    const handlePagination = (newPage: number) => {

        if(newPage >= 1 && newPage <= 42) {
            router.push(`?page=${newPage}`);
        }
    };

    const characterList = characters.results.map(character => (
        <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard character={character}/>
        </Link>
    ))
    return (
        <>
            <HeadMeta title={"Characters"}/>
            <div className={styles.buttons}>
                <button onClick={() => handlePagination(page - 1)}>Previous</button>
                <button onClick={() => handlePagination(1)}>Go to 1 page</button>
                <button onClick={() => handlePagination(page + 1)}>Next</button>
            </div>
            <div className={styles.cards}>
                {characterList}
            </div>
        </>
    );
}

Characters.getLayout = getLayout;
export default Characters;
