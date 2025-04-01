// import {useEffect, useState} from "react";
// import type {Nullable} from "@/assets/types/Nullable";
// import {API} from "@/assets/api/api";
//
// export const useCharacters = (): Nullable<CharacterType[]> => {
//     const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null);
//
//     useEffect(() => {
//         API.rickAndMorty.getCharacters().then(res => setCharacters(res.results));
//     }, [])
//
//     return characters;
// }
//
// //types
// export type CharacterType = {
//     name: string;
//     id: number;
//     image: string;
// }