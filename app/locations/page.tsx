'use client'

import type {LocationType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";
import {useEffect, useState} from "react";
import {API} from "@/assets/api/api";
import type {Nullable} from "@/assets/types/Nullable";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";


const Locations = () => {
    const [locations, setLocations] = useState<Nullable<LocationType[]>>(null)

    useEffect(() => {
        API.rickAndMorty.getLocations().then(res => setLocations(res.results))
    }, [])

    if (!locations) return null

    const locationsList = locations.map(location => (
        <Card key={location.id} name={location.name}/>
    ))

    return (
        <PageWrapper>
            {locationsList}
        </PageWrapper>
    )
}

export default Locations;
