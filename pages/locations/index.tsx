import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import styles from "@/styles/Home.module.css";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import type {LocationType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {GetStaticProps} from "next";
import {Card} from "@/components/Card/Card";
import Link from "next/link";

const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET',
    });
    return await res.json();
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery({queryKey: ['locations'], queryFn: getLocations})
    return {
        props: {
            dehydrateState: dehydrate(queryClient),
        }
    }
}


function Locations() {

    const {data: locations} = useQuery<ResponseType<LocationType>>({queryKey: ['locations'], queryFn: getLocations})

    if(!locations) return null

    const locationsList = locations.results?.map(locate => (
        <Link href={`/locations/${locate.id}`} key={locate.id}>
            <Card  name={locate.name} />
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
