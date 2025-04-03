import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {useQuery} from "@tanstack/react-query";
import type {LocationType, ResponseType} from "@/assets/api/rick-and-morty-api";

const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET',
    });
    return await res.json();
}

function Locations() {

    const {data: locations} = useQuery<ResponseType<LocationType>>({queryKey: ['locations'], queryFn: getLocations})

    if(!locations) return null

    const locationsList = locations.results?.map(locate => (
        <Link href={`/locations/${locate.id}`} key={locate.id}>
            {locate.name}
        </Link>
    ))
    return (
        <>
            <HeadMeta title={"Locations"}/>
            <div className={styles.cards}>
                {locationsList}
            </div>

        </>
    );
}

Locations.getLayout = getLayout;
export default Locations;
