import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";


function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={"Characters"}/>
            {characters && characters.map(character => (
                <Link href={`/characters/${character.id}`} key={character.id}>
                    <CharacterCard  character={character}/>
                </Link>
            ))}
        </>
    );
}

Characters.getLayout = getLayout;
export default Characters;
