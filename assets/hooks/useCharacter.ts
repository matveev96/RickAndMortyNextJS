// import {useEffect, useState} from "react";
// import type {CharacterType} from "@/assets/hooks/useCharacters";
// import {useRouter} from "next/router";
// import type {Nullable} from "@/assets/types/Nullable";
// import {API} from "@/assets/api/api";
//
// export const useCharacter = (): Nullable<CharacterType> => {
//
//     const [character, setCharacter] = useState<Nullable<CharacterType>>(null);
//     const router = useRouter();
//
//     useEffect(() => {
//         API.rickAndMorty.getCharacter(router.query.id).then(res => setCharacter(res))
//     }, [])
//
//     return character;
// }
