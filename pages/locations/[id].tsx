import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import type {GetStaticPaths, GetStaticProps} from "next";
import {API} from "@/assets/api/api";
import type {LocationType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";

export const getStaticPaths: GetStaticPaths = async () => {

    const {results} = await API.rickAndMorty.getLocations()

    const paths = results.map(location => {
        return {params: {id: String(location.id)}}
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const location = await API.rickAndMorty.getLocation(id as string)

    if(!location) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            location
        }
    }
}

type PropsType = {
    location: LocationType
}

function Location({ location }: PropsType) {

    return (
        <>
            <HeadMeta title={"Characters"}/>
            {location &&
                <Card name={location.name}>
                    <div>{location.dimension}</div>
                    <div>{location.residents}</div>
                </Card>
            }
        </>
    );
}

Location.getLayout = getLayout;
export default Location;
