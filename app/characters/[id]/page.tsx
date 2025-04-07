import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
    const characters = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
    return await characters.json()
}

export async function generateStaticParams() {
    const {results} = await getCharacters()
    return results.map(character => ({id: String(character.id)}))
}

export async function generateMetadata({params}: { params: {id: string} }) {

    const { id } = await params
    return {
        title: id,
        description: "NewNextJS"
    };
}

export default async function Character({params}: { params: {id: string} }) {
    const { id } = await params
    return (
        <PageWrapper>
            <h1>ID: {id}</h1>
        </PageWrapper>
    );
}
