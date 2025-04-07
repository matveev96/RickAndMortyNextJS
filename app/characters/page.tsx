import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import Link from "next/link";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
    const characters = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await characters.json()
}

export default async function Characters() {

    const {results} = await getCharacters()

    const characterList = results.map(character => (
        <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard character={character}/>
        </Link>
    ))
    return (
        <>
            <PageWrapper>
                {characterList}
            </PageWrapper>
        </>
    );
}
