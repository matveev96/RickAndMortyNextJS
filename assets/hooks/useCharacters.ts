import {useEffect, useState} from "react";
import axios from "axios";
import type {Nullable} from "@/assets/types";

export const useCharacters = (): Nullable<CharacterType[]> => {
    const [characters, setCharacters] = useState<CharacterType[] | null>(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => setCharacters(res.data.results));
    }, [])

    return characters;
}

//types
export type CharacterType = {
    name: string;
    id: number;
    image: string;
}