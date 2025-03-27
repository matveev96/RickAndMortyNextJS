import {useEffect, useState} from "react";
import axios from "axios";
import type {Nullable} from "@/assets/types";

export const useCharacters = (): Nullable<CharacterType[]> => {
    const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}`).then(res => setCharacters(res.data.results));
    }, [])

    return characters;
}

//types
export type CharacterType = {
    name: string;
    id: number;
    image: string;
}